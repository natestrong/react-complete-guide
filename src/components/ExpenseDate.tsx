import './ExpenseDate.css'

interface Props {
    date: Date
}

function ExpenseDate({date} : Props) {
    const month = date.toLocaleDateString('en-US', {month: 'short'});
    const day = date.toLocaleDateString('en-US', {day: 'numeric'});
    const year = date.toLocaleDateString('en-US', {year: 'numeric'});

    return (
        <div className="expense-date">
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}


export default ExpenseDate;
