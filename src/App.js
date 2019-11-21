import React from 'react';
import 'reset-css';
import './App.scss';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <main className='main'>
      <div className='wrapper' id='capture'>
        <Header />
        <Form />

      </div>
      <Footer />
    </main>
  );
}

export default App;
