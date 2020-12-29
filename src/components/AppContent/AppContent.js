import React from 'react';
import Button from "../Button/Button";
import Options from "../Options/Options";
import AddOption from "../AddOption/AddOption";

function AppContent() {
    return (
        <div className="app-content">
            <Button/>
            <Options/>
            <AddOption/>
        </div>
    )
}

export default AppContent;