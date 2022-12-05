import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Library from './section03/Library';
import Clock from './section04/Clock';
import CommentList from './section05/CommentList';
import NotificationList from './section06/NotificationList';
import Counter from './section07/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Library /> */}
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
