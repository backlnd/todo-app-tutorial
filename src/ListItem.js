import React from 'react';
import './List.css';

function ListItem({ text, onRemove }) {
  return (
    <div className="ListItem">
        <button
            type="button"
            className="ListItem-button"
            onClick={onRemove}
        >
            x
        </button>
        <div>{text}</div>
    </div>
  );
}

export default ListItem;
