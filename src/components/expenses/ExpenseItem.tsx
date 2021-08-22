import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {IExpenseData} from '../NewExpense/ExpenseForm';

function localizeCurrency(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    return formatter.format(value);
}

function ExpenseItem({date, amount, ...props}: IExpenseData) {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date}/>

                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{localizeCurrency(amount)}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
