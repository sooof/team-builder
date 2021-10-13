

import React, { useState, useEffect  } from "react";
import axios from 'axios';


function App() {
  const [formValues , setFormValues] = useState({
    uname: '',
    email: '',
    role: '',
  })

  const onValuesChange = event => {
    // debugger
    if(/^[a-zA-Z]+$/.test(event.target.value) ){
      setFormValues({
        ...formValues,
        [event.target.name]: event.target.value,
      })
    }

  }
const onFormSubmit = event => {
  event.preventDefault();
  alert(`submitting ${formValues.email}, ${formValues.uname}, ${formValues.role}`);
};

  return (
    <div className="container"> 
    <h1>Team Builder </h1>
    <form className='component' onSubmit={onFormSubmit}> 
      <label>Name
        <input 
                value={formValues.uname}
                name='uname'
                onChange={onValuesChange}
                placeholder='Enter  Name'
                />
          <br/>
      </label>
      <label>Email
        <input 
              value={formValues.email}
              name='email'
              onChange={onValuesChange}
              placeholder='Enter email' 
              />
        <br/>
      </label>
      <label>Role
        <select value={formValues.role} name='role' onChange={onValuesChange} >
          <option value=''> -- Select a role -- </option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer"> Frontend Engineer</option>
          <option value="Designer">Designer</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <br/>
      </label>
          <input 
            type='submit'/>
       <br/>


    </form>
    
  </div>)
}


export default App;
