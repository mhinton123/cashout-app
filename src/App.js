import React, { useEffect } from 'react';
import BudgetReview from './components/BudgetReview';
import ExpenseList from './components/ExpenseList';
import Header from "./components/Header";

function App() {
  const [dailyBudget, setDailyBudget] = React.useState({
    budget: "100",
    totalSpent: "0",
    remainingBudget: "100"
  });

  const [expenses, setExpenses] = React.useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }

    const storedBudget = JSON.parse(localStorage.getItem('budget'));
    if (storedBudget) {
      setDailyBudget(prev => {
        return {
          ...prev,
          budget: storedBudget
      }
      }
    )}
  }, []);

  // Save data to local storage on every update to expenses
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('budget', JSON.stringify(dailyBudget.budget));
  }, [expenses, dailyBudget.budget]);

  // Calculate totalSpent and remainingBudget
  useEffect(() => {
    let expensesTotal = 0;
    expenses.forEach(expense => {
      expensesTotal += parseInt(expense.amount);
    });

    setDailyBudget(prev => {
      const newTotalSpent = expensesTotal;
      const newRemainingBudget = parseInt(prev.budget) - newTotalSpent;

      return {
        ...prev,
        totalSpent: newTotalSpent,
        remainingBudget: newRemainingBudget
      };
    });
  }, [expenses]);

  return (
    <div className='app-container'>
      <Header />
      <main>
        <BudgetReview
          dailyBudget={dailyBudget}
          setDailyBudget={setDailyBudget}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <ExpenseList
          expenses={expenses}
          setExpenses={setExpenses}
          dailyBudget={dailyBudget}
          setDailyBudget={setDailyBudget}
        />
      </main>
    </div>
  );
}

export default App;
