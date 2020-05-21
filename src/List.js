import React, { useState } from 'react';
import './List.css';
import ListItem from "./ListItem";

function List() {
    const [items, setItems] = useState(
        ["Install VSCode", "Install Homebrew & Node", "create-react-app"]
    );
    
    function handleChange(event) {
        const { value } = event.target;
        
        if (value.length > 0 && event.key === "Enter") {
            event.preventDefault();
            console.log("adding list item");
            event.target.value = "";
            setItems(items.concat([value]));
        }
    }

    function removeItem(index) {
        console.log("removing ind", index);
        console.log(items);
        const newItems = items.filter((item, i) => index !== i);
        setItems(newItems);
    }     
    
    return (
        <div className="List">
            <input
                type="text"
                className="List-input"
                placeholder="Add item"
                onKeyDown={handleChange} 
            />

            {items.map((item, index) => (
                <ListItem
                    key={item}
                    text={item}
                    onRemove={() => removeItem(index)}
                />
            ))}
        </div>
    );
}

export default List;


