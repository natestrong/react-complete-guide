import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

interface ExpenseList {
    expenseList: ExpenseProps[];
}

export interface ExpenseProps {
    title: string,
    date: Date,
    amount: number,
}

function Expenses({expenseList}: ExpenseList) {
    return (
        <Card className="expenses">
            {expenseList.map(expense =>
                <ExpenseItem key={`${expense.date.toString()}-${expense.title}`} {...expense}/>)}
        </Card>
    );
}

export default Expenses;
