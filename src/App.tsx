import Expenses from './components/Expenses';

function App() {
    const expenses = [
        {title: 'Car Insurance', amount: 295.65, date: new Date(2021, 8, 10)},
        {title: 'Cat Food', amount: 45, date: new Date(2021, 8, 9)},
        {title: 'Gold Grill', amount: 1800, date: new Date(2021, 8, 9)},
        {title: 'Gold Chain', amount: 967, date: new Date(2021, 7, 27)},
    ];

    return (
        <div>
            <Expenses expenseList={expenses}/>
        </div>
    );
}

export default App;
