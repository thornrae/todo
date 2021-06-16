import React from 'react';
import { useGetData } from 'use-axios-react';


function useGetAll () {

  const [data] = useGetData("https:api-js401.herokuapp.com/api/v1/todo");

  return data;
}




// const getAll = () =>{
//   const [data] = useGetData("https:api-js401.herokuapp.com/api/v1/todo");
//   setList(data);
// }

export default useGetAll;