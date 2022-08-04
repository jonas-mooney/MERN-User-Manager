import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import millenium from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';
import { TextField, Button } from 'react95';
// import { StudentDataContext } from '../contexts/StudentDataContext';
import '../scss/newUser.scss';
// import { retrieveData } from '../App';


export default function NewUser({retrieveData}) {
  // const setStudentData = useContext({StudentDataContext});

  const [inputs, setInputs] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    age: ''
  });

  const handleInputChange = (e, prop) => {
    setInputs({
      ...inputs,
      [prop]: e.target.value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: inputs.id,
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email_address: inputs.email_address,
      age: inputs.age
    }

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data sent to the server')
      resetInputs();
      retrieveData();
    })
    .catch(() => {
      console.log('Internal server error')
    })
  }

  const resetInputs = () => {
    setInputs({
      id: '',
      first_name: '',
      last_name: '',
      email_address: '',
      age: ''
    })
  }


  return (

    <ThemeProvider theme={millenium}>
      <form onSubmit={formSubmit} className='newUserContainer'>
        <TextField
          className='userInput'
          name='id'
          placeholder='ID'
          value={inputs.id}
          onChange={(e) => handleInputChange(e, 'id')}
        />
        <TextField
          className='userInput'
          name='first_name'
          placeholder='First Name'
          value={inputs.first_name}
          onChange={(e) => handleInputChange(e, 'first_name')}
        />
        <TextField
          className='userInput'
          name='last_name'
          placeholder='Last Name'
          value={inputs.last_name}
          onChange={(e) => handleInputChange(e, 'last_name')}
        />
        <TextField
          className='userInput'
          name='email_address'
          placeholder='Email'
          value={inputs.email_address}
          onChange={(e) => handleInputChange(e, 'email_address')}
        />
        <TextField
          className='userInput'
          name='age'
          placeholder='Age'
          value={inputs.age}
          onChange={(e) => handleInputChange(e, 'age')}
        />
        <Button type='submit' style={{ marginLeft: 4 }}>
          Add Student
        </Button>
      </form>
    </ThemeProvider>
  );
}