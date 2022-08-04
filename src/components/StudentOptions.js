import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import millenium from 'react95/dist/themes/original';
import { TextField, Button } from 'react95';
import '../scss/studentOptions.scss';

import {
  Tabs,
  Tab,
  TabBody,
  Window,
  WindowHeader,
  WindowContent,
  Fieldset,
  NumberField,
  Checkbox,
  Anchor
} from 'react95';

export default function StudentOptions({singleStudent}) {
  const [state, setState] = useState({
    activeTab: 0
  });
  
  const [inputs, setInputs] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email_address: '',
    age: ''
  });

  const [singleStudentState, setSingleStudentState] = useState({
    id: singleStudent.id,
    first_name: singleStudent.first_name,
    last_name: singleStudent.last_name,
    email_address: singleStudent.email_address,
    age: singleStudent.age
  })


  // setInputs({
  //   id: singleStudent.id,
  //   first_name: singleStudent.first_name,
  //   last_name: singleStudent.last_name,
  //   email_address: singleStudent.email_address,
  //   age: singleStudent.age
  // })

  const handleInputChange = (e, prop) => {
    setInputs({
      ...inputs,
      [prop]: e.target.value
    })
  }
  
  const handleChange = (e, value) => setState({ activeTab: value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: singleStudent.id,
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email_address: inputs.email_address,
      age: inputs.age
    }
    axios({
      url: '/api/update',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data sent to the server')
    })
    .catch(() => {
      console.log('Internal server error')
    })
    console.log('options component is disturbed')
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const payload = {
      id: singleStudent.id
    }
    axios({
      url: '/api/delete',
      method: 'POST',
      data: payload
    })
        .then(() => {
          console.log('Data sent to the server')
        })
        .catch(() => {
          console.log('Internal server error')
        })
    console.log('delete component is disturbed')
  }
  
  const { activeTab } = state;


  return (
    <ThemeProvider className='themeProvider' theme={millenium}>
      <Window className='window'  style={{ width: 350 }}>
          <h1 className='thex'>X</h1>
        <WindowHeader>Edit Student Info</WindowHeader>
        <WindowContent>
          <Tabs value={activeTab} onChange={handleChange}>
            <Tab value={0}>Edit</Tab>
            <Tab value={1}>Delete</Tab>
          </Tabs>
          <TabBody style={{ height: 300 }}>
            {activeTab === 0 && (
        <form onSubmit={handleSubmit} className='newUserContainer'>
          <TextField disabled
            className='userInput'
            name='id'
            placeholder={singleStudent.id}
            value={inputs.id}
            onChange={(e) => handleInputChange(e, 'id')}
          />
          <TextField
            className='userInput'
            name='first_name'
            placeholder={singleStudent.first_name}
            value={inputs.first_name}
            onChange={(e) => handleInputChange(e, 'first_name')}
          />
          <TextField
            className='userInput'
            name='last_name'
            placeholder={singleStudent.last_name}
            value={inputs.last_name}
            onChange={(e) => handleInputChange(e, 'last_name')}
          />
          <TextField
            className='userInput'
            name='email_address'
            placeholder={singleStudent.email_address}
            value={inputs.email_address}
            onChange={(e) => handleInputChange(e, 'email_address')}
          />
          <TextField
            className='userInput'
            name='age'
            placeholder={singleStudent.age}
            value={inputs.age}
            onChange={(e) => handleInputChange(e, 'age')}
          />
          <Button type='submit' style={{ marginLeft: 4 }}>
            Update Student
          </Button>
        </form>
            )}
            {activeTab === 1 && (
            <form onSubmit={handleDelete}>
              <div>
                <div>Are you sure you want to delete {singleStudent.first_name + ' ' + singleStudent.last_name}?</div>
                <button className='delete'>Yes</button>
              </div>
            </form>
            )}
          </TabBody>
        </WindowContent>
      </Window>
    </ThemeProvider>

  )
}