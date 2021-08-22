import {IExpenseData} from '../NewExpense/ExpenseForm';

const initialExpenses: IExpenseData[] = [
    {
        dateString: new Date('June 10, 2020').toLocaleDateString(),
        id: '1',
        amount: 100,
        date: new Date('June 10, 2020'),
        title: 'Yu-Gi-Oh Cards'
    },
    {amount: 7, date: new Date('June 20, 2021'), dateString: new Date('June 20, 2021').toLocaleDateString(), id: '2', title: 'Chicken Sandwich'},
    {dateString: new Date('August 02, 2021').toLocaleDateString(), id: '3', amount: 550, date: new Date('August 02, 2021'), title: 'Golden Cat Shrine'},
    {dateString: new Date('July 04, 2021').toLocaleDateString(), id: '4', amount: 220, date: new Date('July 04, 2021'), title: 'Cool Glasses'},
];
export default initialExpenses;
