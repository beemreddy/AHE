import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import { Tomato } from './tomato/Tomato';
import { Spinach } from './spinach/Spinach';
import { TomatoVariety } from './tomato/TomatoVariety';
import { Radish } from './radish/Radish';
import { RadishVariety } from './radish/radish-variety';
import { SpinachVariety } from './spinach/spinach-variety';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons'
import { Tip } from './tips/Tip';
import { TipInfo } from './tips/TipInfo';
import { Intro } from './Intro';

const root = document.getElementById('root');

initializeIcons();

ReactDOM.render( 
  <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          
          <Route path="/" element={<Intro/>} />
          
          <Route path="tips" element={<Tip/>} >
            <Route path=":id" element={<TipInfo />} />
          </Route>

          <Route path="tomato" element={<Tomato/>} >
            <Route path=":id" element={<TomatoVariety />} />
          </Route>

          <Route path="spinach" element={<Spinach/>} >
            <Route path=":id" element={<SpinachVariety />} />
          </Route>

          <Route path="radish" element={<Radish/>}>
            <Route path=":id" element={<RadishVariety/>} />
          </Route>

          <Route path="*" element={<NotFound/>} />

        </Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
