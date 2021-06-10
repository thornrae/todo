import React from 'react';
import {useState, useContext} from 'react';
import {SiteContext} from '../../context/context.js';

import ListGroup from 'react-bootstrap/ListGroup'

function TodoList(props) {

  // const [complete, setComplete] = useState([]);

  const siteInformation = useContext(SiteContext);

    // const updateComplete = (e) => {
    //   setComplete(item.complete);
    // }

    const hideComplete = (e) => {
      siteInformation.changeHideCompleteTo(true);
    }

    return (
      <ListGroup variant="flush">
        {props.list.map(item =>
        <ListGroup.Item className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>{item.text} 
        <span onClick={() => hideComplete(item._id)}>Mark as complete</span>
        </ListGroup.Item> 
          )}
      </ListGroup>

      // <ListGroup variant="flush">
      //   {props.list.map(item =>
      //   <ListGroup.Item className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>{item.text} 
      //   <span onClick={() => hideComplete(item._id)}>Mark as complete</span>
      //   </ListGroup.Item> 
      //     )}
      // </ListGroup>

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
