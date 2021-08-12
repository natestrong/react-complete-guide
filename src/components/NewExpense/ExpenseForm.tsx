import './ExpenseForm.css';
import {SyntheticEvent, useState} from 'react';

export interface INewExpenseForm {
    title: string;
    dateString: string;
    date: Date;
    amount: number;
}

const initialFormData = {
    title: '',
    date: new Date(),
    dateString: new Date().toISOString().split('T')[0],
    amount: 0
}

function ExpenseForm() {
    const [userInput, setUserInput] = useState<INewExpenseForm>({...initialFormData});

    function titleChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const title = (e.target as HTMLInputElement).value;
        setUserInput((prevState) => ({...prevState, title}));
    }

    function amountChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const amount = Number((e.target as HTMLInputElement).value);
        setUserInput((prevState) => ({...prevState, amount}));
    }

    function dateChangeHandler(e: SyntheticEvent<HTMLInputElement>) {
        const dateString = (e.target as HTMLInputElement).value;
        setUserInput((prevState) => ({
            ...prevState,
            dateString,
            date: new Date(dateString)
        }));
    }

    function submitHandler(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(userInput);

        setUserInput({...initialFormData});
    }

    return (
        <form onSubmit={submitHandler}>
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
                           value={userInput.dateString}
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
