import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {PropsWithChildren} from 'react';

function NewExpense({saveExpenseDataHandler}: PropsWithChildren<any>) {
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
