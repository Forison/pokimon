import React, { Component } from 'react';
import Header from './Header';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { addToList } from '../../redux/action';


class Right extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pokis: [],
    }
  }
  getAllPokemons = async() => {
    const pokiId = [];
    for (let index = 1; index <= 100; index++) {
      pokiId.push(index);
    } 
    this.setState({pokis: pokiId});
  }

  handlePokeImgClick = (record) => {
    console.log(record);
  }
  componentDidMount = () => {
    this.getAllPokemons();
  }

  render() {
    const { pokis } = this.state;
    return (
      <div className = "rightComp overflow-auto">
        <Header headerText = "Poke Dex Area" />
        <div className="container">
          <div className="row ">
            { pokis.map( record =>
            <div key={shortid.generate()} className="col-2 p-3">
              <img 
              src = {`https://pokeres.bastionbot.org/images/pokemon/${record}.png`} 
              alt="pokemon"
              className="rounded-circle bg-light p-2"
              onClick={()=>this.handlePokeImgClick(record)}
              />
            </div>
            )} 
          </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToPokemonList: pokemonId => dispatch(addToList(pokemonId))
});

export default connect(null, mapDispatchToProps)(Right);