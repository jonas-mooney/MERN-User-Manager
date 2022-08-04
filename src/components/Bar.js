import React from 'react';
import styled from 'styled-components';
import { Bar, AppBar, Toolbar, Button } from 'react95';
import '../scss/bar.scss'


export default function BarComponent() {

  return (
    <AppBar className='appBar'>
      <Toolbar className='toolBar'>
        <Bar size={35} />
        <Button variant='menu'>Edit</Button>
        <Button variant='menu' disabled>
          Save
        </Button>
        <Bar size={35} />
      </Toolbar>
    </AppBar>
  )
}

