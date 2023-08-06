import React from 'react';
import './App.css';

function App() {
  return(
    <div className="main">
      <h1>Hey Kalvians</h1>
      <form>
          <label htmlFor="name">Name</label>
          <input style={{ display : 'block' }}type="text" id="name" />

          <label htmlFor="mail">Gmail</label>
          <input style={{ display : 'block' }} type="mail" id="name" />

          <label htmlFor="address">Address</label>
          <input style={{ display : 'block' }} type="text" id="address" />
          
          <input type="submit"  />
      </form>
    </div>
  )
}

export default App;