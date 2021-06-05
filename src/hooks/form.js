import {useState} from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});


 const handleInputChange = e => {
  e.persist();
  let name = e.target.name;
  let value = e.target.value;
  setValues( {...values, [name]: value } );
};

const handleSubmit = (e) => {
  e.preventDefault();
  // e.target.reset();
  // props.handleSubmit(item);
  // const clearcache = {};
  callback(values);
};

return [handleInputChange, handleSubmit, values];

}

export default useForm;