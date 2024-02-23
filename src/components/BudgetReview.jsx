import React from "react";
import DailyBudget from "./DailyBudget";
import ExpenseForm from "./ExpenseForm";

export default function BudgetReview (props) {
    
    // Handles + or - before the the rendered amount
    const remainingBudgetString = props.dailyBudget.remainingBudget >= 0 ? `+£${props.dailyBudget.remainingBudget}` : `-£${parseInt(Math.abs(props.dailyBudget.remainingBudget))}`

    return (

        <div className="budget-review-wr">
        
        <DailyBudget 
            dailyBudget={props.dailyBudget} 
            setDailyBudget={props.setDailyBudget}
        />

        <div className="hero-img">
            <img src="./assets/hero-img.png" alt="hero-img" className="hero-img"/>
        </div>            
            <div className="left-col">
                <div className="budget-overview-wr">
                    <div className="left-col">
                        <h4>Total Spent:</h4>
                    </div>
                    <div className="right-col">
                        <p id="total-spent">£{props.dailyBudget.totalSpent}</p>
                        <p id="remaining-budget">{remainingBudgetString}</p>
                    </div>
                </div>

                <ExpenseForm 
                    expenses={props.expenses}
                    setExpenses={props.setExpenses}
                    dailyBudget={props.DailyBudget}
                    setDailyBudget= {props.setDailyBudget}
                />
            </div>
        </div>
    )
}