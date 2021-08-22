import React, {SyntheticEvent} from 'react';
import './ExpensesFilter.css';

interface ExpensesFilterProps {
    onChangeFilter: Function;
    yearFilter: number;
}

const ExpensesFilter = ({onChangeFilter, yearFilter}: ExpensesFilterProps) => {
    function handleChange({target}: SyntheticEvent) {
        onChangeFilter((target as HTMLSelectElement).value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={handleChange}
                        value={yearFilter}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
