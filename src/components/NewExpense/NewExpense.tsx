import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {PropsWithChildren, useState} from 'react';

function NewExpense({saveExpenseDataHandler}: PropsWithChildren<any>) {
    const [formIsOpen, setFormIsOpen] = useState(false);

    const closeForm = () => setFormIsOpen(false);

    return (
        <div className='new-expense'>
            {
                formIsOpen ?
                    <ExpenseForm
                        onSaveExpenseData={saveExpenseDataHandler}
                        onCloseForm={closeForm}/> :
                    <button className=''
                            onClick={() => setFormIsOpen(true)}>Add New Expense
                    </button>
            }
        </div>
    );
}

export default NewExpense;
