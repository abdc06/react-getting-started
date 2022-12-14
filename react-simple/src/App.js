import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Form from './pages/Form';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/input">Input</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
