import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class TopLeft extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pokiList: []
    }
  }
  
  componentDidUpdate = () => {

  }

  render() {
    return (
      <div className = "topLeftComp">
        <Header headerText = "Pokemon Line up"/>
        <div className="container">
          <div className="row">
          <div className="col-4">

          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myList: state.lineUp,
});

export default connect(mapStateToProps, null)(TopLeft);
