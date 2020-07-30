import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import shortid from 'shortid';


class TopLeft extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       information: "",
    }
  }

  handlePokeImgHover = (arg) => {
   
  }

  componentDidMount = () => {
    const { myList } = this.props;
    if (myList.length === 0) {
      this.setState({message: "select a pokemon from poke dex area"})
    }
  }
  render() {
    const { myList } = this.props;
    return (
      <div className = "topLeftComp">
        <Header headerText = "Pokemon Line up"/>
        <div className="container">
         <div className="row">
          { myList.map( data =>
          <div key={shortid.generate()} className="col-4 col-sm-4 col-lg-4 pokemon-pad-left rounded p-0  p-sm-2 p-lg-3 shadow-lg">
            <h3 className="name-of-pokemon"> {data.name}</h3>
            <img 
              src = {`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} 
              alt="pokemon-detail-img"
              onMouseEnter = {()=>this.handlePokeImgHover(data.id)}
            />
          </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myList: state.pokemon,
});

export default connect(mapStateToProps, null)(TopLeft);
