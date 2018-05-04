import { combineReducers } from 'redux';
import expenseReducer from './components/ExpenseEntries/exspenseReducer';
import incomeReducer from './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers ({
    expense: expenseReducer,
    income: incomeReducer
});

export default rootReducer;