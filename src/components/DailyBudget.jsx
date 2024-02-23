import React, { useState } from "react";

export default function DailyBudget(props) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedBudget, setEditedBudget] = useState(props.dailyBudget.budget);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setEditedBudget(e.target.value ? e.target.value : "0");
    };

    const handleSaveClick = () => {
        
        // Update dailyBudget
        props.setDailyBudget(prev => {
            return {
                ...prev,
                budget: editedBudget,
                remainingBudget: JSON.stringify(editedBudget - prev.totalSpent)
            }
        });
        setIsEditing(false);
    }; 

    return (
        <div className="daily-budget-wr">
            <img src="./assets/wallet-icon.svg" alt="wallet icon" className="wallet-icon" />
            <form>
                {isEditing ? (
                    <input
                        type="number"
                        value={editedBudget}
                        onChange={handleInputChange}
                        autoFocus
                        min="0"
                        step="1"
                        required
                    />
                ) : (
                    <h3>
                        Daily Budget: <span id="daily-budget">£{props.dailyBudget.budget}</span>
                    </h3>
                )}
                {isEditing ? (
                    <button className="primary-btn bold" onClick={handleSaveClick}>SAVE</button>
                ) : (
                    <img
                        src="./assets/edit-icon.svg"
                        alt="edit-icon"
                        className="edit-icon"
                        onClick={handleEditClick}
                    />
                )}
            </form>
        </div>
    );
}


