import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import {IExpenseList} from '../NewExpense/ExpenseForm';
import ExpensesList from './ExpensesList';


function Expenses({expenseList}: IExpenseList) {
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear().toString());

    const filterChangeHandler = (selectedYear: string) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = expenseList.filter(expense => expense.date.getFullYear().toString() === yearFilter);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler}
                                yearFilter={yearFilter}/>

                <ExpensesList items={filteredExpenses}/>

            </Card>
        </div>
    );
}

export default Expenses;
