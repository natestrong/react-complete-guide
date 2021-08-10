import './ExpenseItems.css';

function localizeCurrency(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(value);
}

interface ExpenseProps {
    title: string,
    date: Date,
    amount: number,
}

function ExpenseItem({title, date, amount}: ExpenseProps) {
    const month = date.toLocaleDateString('en-US', {month: 'short'});
    const day = date.toLocaleDateString('en-US', {day: 'numeric'});
    const year = date.toLocaleDateString('en-US', {year: 'numeric'});

    return (<div className='expense-item'>

            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{localizeCurrency(amount)}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
