import React, { useState, useContext, useEffect } from 'react';
import './scss/app.scss';
import axios from 'axios';
import Table from './components/Table';
import NewUser from './components/NewUser';
import { StudentDataContext } from './contexts/StudentDataContext';
import StudentOptions from './components/StudentOptions';


function App() {
  const [studentData, setStudentData] = useState([]);
  const [singleStudent, setSingleStudent] = useState({});

  useEffect(() => {
    setTimeout(function(){
      retrieveData()
    }, 4000)
  })

  const retrieveData = () => {
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      console.log('Successfully read data')
      setStudentData(data)
    })
    .catch(() => {
      console.log('Data not found')
    })
  }

  const sendClickedDataToOptions = (data) => {
    setSingleStudent(data)
  }

  return (
    <StudentDataContext.Provider value={{ studentData, setStudentData }} className='main'>
      <Table studentData={studentData} sender={sendClickedDataToOptions}/>
      <div className='secondaryWrapper'>
      <NewUser retrieveData={retrieveData} />
      <StudentOptions singleStudent={singleStudent} />
      </div>
    </StudentDataContext.Provider>
  );
}

export default App;

// value represents the states the components will share