import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ExpenseForm (props) {

    function handleSubmit(event) {
        event.preventDefault();
        
        const expenseName = document.getElementById("expense-name")
        const expenseAmount = document.getElementById("expense-amount")
        
        // Adds new expense to expenses 
        const newExpense = {
            id: uuidv4(),
            createdAt: new Date(),
            name: expenseName.value,
            amount: expenseAmount.value
        }
  
        props.setExpenses(prev => {
            
            return [
                ...prev,
                newExpense
            ]
        })
        
        // Add expence to Total Spent
        props.setDailyBudget(prev => {
            return {
                ...prev,
                totalSpent: JSON.stringify(parseInt(prev.totalSpent) + parseInt(newExpense.amount)),
            }
        })

        // calculate remaining Budget
        props.setDailyBudget(prev => {
            return {
                ...prev,
                remainingBudget: JSON.stringify(parseInt(prev.budget) - parseInt(prev.totalSpent))
            }
        })

        // Wipe input fields
        expenseName.value = ""
        expenseAmount.value = ""
    }
    
    return (
        <div className="add-expense-form-wr">
                    <h4>Add Expense</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="expense-name" placeholder="Name"/>
                        <input type="number" id="expense-amount" placeholder="£0.00" min="0" step="1" required/>
                        <button id="add-expense-btn" className="primary-btn">ADD</button>
                    </form>
                </div>
    )
}