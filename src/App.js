import React from 'react';
import 'reset-css';
import './App.scss';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
function App() {
  return (
    <main className='main'>
      <div className='wrapper' id='capture'>
        <Header />
        <Form />
      </div>
    </main>
  );
}

export default App;
