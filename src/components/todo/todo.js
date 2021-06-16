import React, {useState, useEffect, useContext} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAxios from 'axios-hooks';
import axios from 'axios';
import Pagination from '../pagination.js';
import Auth from '../../auth/auth.js';

import './todo.scss';
// import { NavItem } from 'react-bootstrap';

function ToDo(props) {
  const [list, setList] = useState([]);
  const [loadingP, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3)

  const [{ data, loading, error }, refetch] = useAxios ({url: "https:api-js401.herokuapp.com/api/v1/todo", method:"GET"});

  const addItem =  async item => {
    // console.log(item);
    item.complete = false;
    let url =  "https://api-js401.herokuapp.com/api/v1/todo/";
    // console.log('newitem', item);
    await axios.post(url, item); 
    let newlist = list.map(listItem => listItem._id === item._id ? item : listItem);
    setList(newlist);
    refetch();
  };

  const toggleComplete = async id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url =  `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
      let fixed = await axios.put(url, item) 
      console.log(fixed);

      let newlist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newlist);
      refetch()
    }
  };

  const deleteItem = async id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if(item._id) {
      let url =  `https://api-js401.herokuapp.com/api/v1/todo/${id}`;
      let deletedItem = await axios.delete(url, item);
      let updatedList = list.map(listItem => listItem.id === item._id ? item : listItem);
      setList(updatedList);
      refetch()
    }
  }

  useEffect( () => {
    if(!loading){
      setLoading(true);
      setList(data.results);
      setLoading(false);
    }
  }, [loading, data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)

    return (
      <>
      <Auth>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>
        </Auth>  

        <section className="todo">

        <Auth capability="create">
          <div>
            <TodoForm todoHandleSubmit={addItem} />
          </div>
        </Auth>  

        <Auth capability="read">
          <div>
            <TodoList
              list={currentPosts}
              handleComplete={toggleComplete}
              handleDelete={deleteItem}
              loading={loadingP}
            />
          </div>
          <div>
            <Pagination postsPerPage={postsPerPage} totalPosts={list.length}/>
          </div>
        </Auth>
  
          
        </section>
      </>
    );
}

export default ToDo;



//class component version

// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//   }

//   addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     this.setState({ list: [...this.state.list, item]});
//   };

//   toggleComplete = id => {

//     let item = this.state.list.filter(i => i._id === id)[0] || {};

//     if (item._id) {
//       item.complete = !item.complete;
//       let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
//       this.setState({list});
//     }

//   };

//   componentDidMount() {
//     let list = [
//       { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
//       { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
//       { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
//       { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
//       { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
//     ];

//     this.setState({list});
//   }

//   render() {
//     return (
//       <>
//         <header>
//           <h2>
//           There are {this.state.list.filter(item => !item.complete).length} Items To Complete
//           </h2>
//         </header>

//         <section className="todo">

//           <div>
//             <TodoForm handleSubmit={this.addItem} />
//           </div>

//           <div>
//             <TodoList
//               list={this.state.list}
//               handleComplete={this.toggleComplete}
//             />
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default ToDo;

