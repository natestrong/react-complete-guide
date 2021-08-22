import {IExpenseData} from '../NewExpense/ExpenseForm';

const initialExpenses: IExpenseData[] = [
    {
        dateString: new Date('June 10, 2020').toLocaleDateString(),
        id: '1',
        amount: 100,
        date: new Date('June 10, 2020'),
        title: 'Yu-Gi-Oh Cards'
    },
    {amount: 7, date: new Date(), dateString: new Date().toLocaleDateString(), id: '2', title: 'Chicken Sandwich'},
    {dateString: new Date().toLocaleDateString(), id: '3', amount: 550, date: new Date(), title: 'Golden Cat Shrine'},
    {dateString: new Date().toLocaleDateString(), id: '4', amount: 220, date: new Date(), title: 'Cool Glasses'},
];
export default initialExpenses;
