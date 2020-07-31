import React from 'react';
import '../../stylesheet/App.css';
import Left from '../containers/Left';
import Right from '../containers/Right';


function App() {
  return (
    <div> 
    <div className="App container-fluid">
      <div className="row pt-1">
        <div className="col-12 col-lg-10 shadow-lg rounded d-flex mx-auto">
          <div className="left rounded mt-4">
          <Left />
          </div>
          <div className="right mt-4">
          <Right />
         </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
