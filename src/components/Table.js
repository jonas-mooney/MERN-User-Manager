import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import millenium from 'react95/dist/themes/original';
import BarComponent from './Bar';
import '../scss/table.scss';
import { StudentDataContext } from '../contexts/StudentDataContext';

import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableDataCell,
  Window,
  WindowHeader,
  WindowContent
} from 'react95';

export default function DefineTable({studentData, sender}) {
  const [showOptions, setShowOptions] = useState(false)
  let g = 56;
  const [alphaOrder, setAlphaOrder] = useState(true)

  const handleClick = (data) => {
    sender(data)
  }

  const reversed = studentData.sort(function(a,b) {
    let nameA = a.first_name.toUpperCase();
    let nameB = b.first_name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <ThemeProvider theme={millenium}>
      <Window className='window'>
        <WindowHeader>Preston High School Students</WindowHeader>
        <WindowContent className='windowContent'>
          <Table className='table'>
            <TableHead className='tableHead'>
              <TableRow>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell onClick={() => setAlphaOrder(false)}>First Name</TableHeadCell>
                <TableHeadCell>Last Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Age</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className='tableBody'>
              {alphaOrder && studentData.map(student =>
                  <TableRow
                      onClick={() => handleClick(student)}
                      key={g++} className='tableRow'>
                    <TableDataCell style={{ textAlign: 'center' }}>
                        {student.id}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                        {student.first_name}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                        {student.last_name}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                        {student.email_address}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                        {student.age}
                    </TableDataCell>
                  </TableRow>
                )}
              {!alphaOrder && reversed.map(student =>
                  <TableRow
                      onClick={() => handleClick(student)}
                      key={g++} className='tableRow'>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {student.id}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {student.first_name}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {student.last_name}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {student.email_address}
                    </TableDataCell>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      {student.age}
                    </TableDataCell>
                  </TableRow>
              )}


            </TableBody>
          </Table>
        </WindowContent>
      {/* <BarComponent /> */}
      </Window>
    </ThemeProvider>
  );

}