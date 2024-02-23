import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
    
    const expensesJSX = props.expenses.map(expense => {
        return (
            <ExpenseItem 
                key={expense.id}
                uid={expense.id}
                name={expense.name}
                amount={expense.amount}
                expenses={props.expenses}
                setExpenses={props.setExpenses}
                setDailyBudget={props.setDailyBudget}
            /> 
        )
    })
    
    return (
        <div className="expence-list-wr">
            <h4>Expense List</h4>
            <div className="right-col">
            <div className="expenses-list-wr">
                {expensesJSX}
            </div>
        </div>
        </div>
    )
}