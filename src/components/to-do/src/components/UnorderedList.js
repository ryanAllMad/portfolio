import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


//TODO map over results to add items to the list

// Okay i can add to the id number but i can't print out new list items 
//TODO add iconography

const ListItem = ({listItem, onDelete,}) => {

  return (
  <li><input type="checkbox" id={`to-do-${listItem.replaceAll(' ', '-').toLowerCase()}`} />
  <label htmlFor={`to-do-${listItem.replaceAll(' ', '-').toLowerCase()}`}>
  {listItem}
  </label>
  <button onClick={onDelete} className="trash">
  <FontAwesomeIcon icon={faTrashAlt} />
  <span className="visually-hidden">delete</span>
  </button>
  </li>
  );
}

const UnorderdList = ({results}) => {
const [deletedFeedback, setDeletedFeedback] = useState('');
const onDeleteClick = () => {
  document.querySelector(`.list-items li:last-child`).remove();
  document.querySelector(`.to-do-title`).focus();
  setDeletedFeedback(`${results} has been removed`);
}

  return  (
       <div>
       <ul className="list-items">
       <ListItem onDelete={onDeleteClick} listItem={`Be Funny`} />
       <ListItem onDelete={onDeleteClick} listItem={`Be Kind`} />
       <ListItem onDelete={onDeleteClick} listItem={results} />

       </ul>
       <div role="status" aria-live="polite" className="visually-hidden">{deletedFeedback}</div>
       </div>
  );
  
}


export default UnorderdList;