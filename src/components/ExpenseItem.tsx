import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import {ExpenseProps} from './Expenses';
import Card from './Card';

function localizeCurrency(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(value);
}

function ExpenseItem({title, date, amount}: ExpenseProps) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{localizeCurrency(amount)}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
