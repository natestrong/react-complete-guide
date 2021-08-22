import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import {IExpenseData} from '../NewExpense/ExpenseForm';

function ExpensesList({items}: { items: IExpenseData[] }) {
    if (items.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses found</h2>;
    }

    return (
        <ul className='expenses-list'>
            {items.map((expense) => (
                <ExpenseItem
                    key={`${expense.date.toString()}-${expense.title}`}
                    {...expense}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
