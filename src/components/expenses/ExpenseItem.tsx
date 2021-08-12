import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import {ExpenseProps} from './Expenses';
import Card from '../UI/Card';
import React, {useState} from 'react';

function localizeCurrency(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(value);
}

function ExpenseItem({date, amount, ...props}: ExpenseProps) {

    const [title, setTitle] = useState(props.title);

    function titleClickHandler(e: React.MouseEvent) {
        setTitle('New Title');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{localizeCurrency(amount)}</div>
            </div>

            <button onClick={titleClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
