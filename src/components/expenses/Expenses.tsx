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
    const [filteredExpenses, setFilteredExpenses] = useState(expenseList);
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear().toString());

    const filterChangeHandler = (selectedYear: string) => {
        setYearFilter(selectedYear);
        console.log(selectedYear);
        const filtered = expenseList.filter(expense => {
            console.log(expense.date.getFullYear());
            return expense.date.getFullYear().toString() === selectedYear;
        });
        console.log(filtered);
        setFilteredExpenses(filtered);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler}
                                yearFilter={yearFilter}/>
                {filteredExpenses.map(expense =>
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
