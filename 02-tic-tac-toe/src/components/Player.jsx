import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    const editHandler = (e) => {
        // when updating state in react, do not do this
        // setIsEditing(!isEditing);

        // insted, pass a function to your state updating function
        setIsEditing(() => !isEditing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }
    
    const handleChange = (e) =>{
        // e.target --> the element that triggered the event
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = 
            <input 
                type="text" 
                required value={playerName} 
                onChange={handleChange}
            />;
    }

    return (
        <li className={ isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}> 
                {isEditing ? 'Save' : 'Edit' }
            </button>
        </li>
    );
}