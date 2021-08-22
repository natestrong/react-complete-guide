import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {IExpenseData} from './components/NewExpense/ExpenseForm';
import {useState} from 'react';
import initialExpenses from './components/expenses/initialExpenses';

function App() {
    const [expenses, setExpenses] = useState<IExpenseData[]>(initialExpenses);

    function saveExpenseDataHandler(expenseData: IExpenseData) {
        setExpenses((prevState) => [...prevState, expenseData]);
    }

    return (
        <div>
            <NewExpense saveExpenseDataHandler={saveExpenseDataHandler}/>
            <Expenses expenseList={expenses}/>
        </div>
    );
}

export default App;
