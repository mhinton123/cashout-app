import React from "react";

export default function ExpenseItem(props) {
    
    function handleClick(id){

        // Remove item from expenses Arr
        props.setExpenses(prev => {
            return prev.filter(item => item.id != props.uid)
        })

        // calculate remaining Budget
        props.setDailyBudget(prev => {
            return {
                ...prev,
                remainingBudget: JSON.stringify(parseInt(prev.budget) - parseInt(prev.totalSpent))
            }
        })
    }

    return (
        <div className="expense-wr" id={props.uid}>
                <div className="left-col">
                    <p className="expense-name">{props.name}</p>
                </div>
                <div className="right-col">
                    <p className="bold expense-amount">£{props.amount}</p>
                    <img src="./assets/delete-icon.svg" alt="delete-icon" className="delete-icon" onClick={() => handleClick(props.uid)}/>
                </div>
        </div>
    )
}