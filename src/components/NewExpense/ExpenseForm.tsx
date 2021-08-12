import './ExpenseForm.css';
import {SyntheticEvent, useState} from 'react';

function ExpenseForm() {
    const [userInput, setUserInput] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        amount: 0
    });

    function titleChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const title = (e.target as HTMLInputElement).value;
        setUserInput({...userInput, title});
    }

    function amountChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const amount = Number((e.target as HTMLInputElement).value);
        setUserInput({...userInput, amount})
    }

    function dateChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const date = (e.target as HTMLInputElement).value;
        setUserInput({...userInput, date});
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='titleInput'>Title</label>
                    <input id='titleInput'
                           value={userInput.title}
                           onChange={titleChangeHandler}
                           type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amountInput'>Amount</label>
                    <input id='amountInput'
                           onChange={amountChangeHandler}
                           value={userInput.amount}
                           type='number'
                           min='0.01'
                           step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='dateInput'>Date</label>
                    <input id='dateInput'
                           onChange={dateChangeHandler}
                           value={userInput.date}
                           type='date'
                           min='2019-01-01'
                           max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
