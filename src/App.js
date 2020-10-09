import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <h1>aplikasi pertama react js</h1>
        <List/>
        <Footer/>
      </div>
    );
  }
}

export default App;
