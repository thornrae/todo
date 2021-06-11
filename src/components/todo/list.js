import React from 'react';
import {useState, useContext} from 'react';
import {SiteContext} from '../../context/context.js';

// import ListGroup from 'react-bootstrap/ListGroup'
import Toast from 'react-bootstrap/Toast';

function TodoList(props) {

  // const [complete, setComplete] = useState([]);

  // const [showA, setShowA] = useState(true);
  // const [showB, setShowB] = useState(true);
  // const [show, setShow] = useState(true);
  // const toggleShowA = () => setShowA(!showA);
  // const toggleShowB = () => setShowB(!showB);
        // onClose={ () => setShow(false)} show={show}

  const siteInformation = useContext(SiteContext);

    // const updateComplete = (e) => {
    //   setComplete(item.complete);
    // }

    const hideComplete = (e) => {
      siteInformation.changeHideCompleteTo(true);
    }

    return (
      <>
      {props.list.map(item => 
      <Toast>
        <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">{item.assignee}</strong>
      <small >{item.complete.toString()}</small>
    </Toast.Header>
    <Toast.Body className={`complete-item${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id) }>{item.text}</Toast.Body>
    
  </Toast>
  )}
</>






      // <ListGroup variant="flush">
      //   {props.list.map(item =>
      //   <ListGroup.Item className={`complete-${item.complete.toString()}`} key={item._id} onClick={() => props.handleComplete(item._id)}>{item.text} 
      //   <span onClick={() => hideComplete(item._id)}>Mark as complete</span>
      //   </ListGroup.Item> 
      //     )}
      // </ListGroup>

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
