import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { NavFabricDemoAppExample } from './nav-menu';
import { Separator, Stack, StackItem } from '@fluentui/react';

function App() {
  return (
    <Stack>
      <Header />
      <Stack horizontal={true}>
        <StackItem style={{width: "80%"}}>
          <Stack horizontal={true}>
            <NavFabricDemoAppExample />
            <Outlet/>
          </Stack>
        </StackItem>
        <StackItem>
          <div></div>
        </StackItem>
      </Stack>
    </Stack>
  );
}

export default App;
