import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { NavFabricDemoAppExample } from './nav-menu';
import { Separator, Stack, StackItem } from '@fluentui/react';

function App() {
  return (
    <Stack style={{backgroundColor:'lightseagreen'}}>
      <Header />
      <Stack horizontal={true}>
        <StackItem style={{width: "80%"}}>
          <Stack horizontal={true}>
            <NavFabricDemoAppExample />
            <Stack style={{paddingLeft: "24px"}}>
              <Outlet/>
            </Stack>
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
