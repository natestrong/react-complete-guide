import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

export interface ExpenseList {
    expenseList: IExpense[];
}

export interface IExpense {
    title: string,
    date: Date,
    amount: number,
}

function Expenses({expenseList}: ExpenseList) {
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

    const filterChangeHandler = (selectedYear: number) => {
        setYearFilter(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler} yearFilter={yearFilter}/>
                {expenseList.map(expense =>
                    <ExpenseItem
                        key={`${expense.date.toString()}-${expense.title}`}
                        {...expense}
                    />)
                }
            </Card>
        </div>
    );
}

export default Expenses;
