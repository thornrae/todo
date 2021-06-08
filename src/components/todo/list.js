import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup'

function TodoList(props) {
    return (

      <ListGroup variant="flush">
        {props.list.map(item =>
        <ListGroup.Item className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>{item.text}</ListGroup.Item> 
          )}
      </ListGroup>

    )
}

      


    //   <ul>
    //     {props.list.map(item => (
    //       <li
    //         className={`complete-${item.complete.toString()}`}
    //         key={item._id}
    //       >
    //         <span onClick={() => props.handleComplete(item._id)}>
    //           {item.text}
    //         </span>
    //       </li>
    //     ))}
    //   </ul>
    // );
  


export default TodoList;
