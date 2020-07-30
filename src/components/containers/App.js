import React from 'react';
import '../../stylesheet/App.css';
import Left from '../presentational/TopLeft';
import Right from '../presentational/Right';


function App() {
  return (
    <div> 
    <div className="App container-fluid">
      <div className="row pt-5">
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
