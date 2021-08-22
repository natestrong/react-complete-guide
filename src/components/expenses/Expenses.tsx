import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import {IExpenseList} from '../NewExpense/ExpenseForm';


function Expenses({expenseList}: IExpenseList) {
    const [yearFilter, setYearFilter] = useState(new Date().getFullYear().toString());

    const filterChangeHandler = (selectedYear: string) => {
        setYearFilter(selectedYear);
    };

    const filteredExpenses = expenseList.filter(expense => expense.date.getFullYear().toString() === yearFilter);

    let expensesContent: JSX.Element = <p>No expenses found</p>;
    if (filteredExpenses.length) {
        expensesContent = <> {
            filteredExpenses.map(expense =>
                <ExpenseItem
                    key={`${expense.date.toString()}-${expense.title}`}
                    {...expense}
                />)
        }
        </>;
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler}
                                yearFilter={yearFilter}/>
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
