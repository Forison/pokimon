import React, { Component } from 'react';
import Header from './Header';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { addInfo } from '../../redux/action';
import axios from 'axios';
import Gif from '../presentational/748.gif';


class Right extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pokis: [],
       checkDup: [],
       count: 1,
       message: ""
    }
  }

  getAllPokemons = async() => {
    const pokiId = [];
    for (let index = 1; index <= 100; index++) {
      pokiId.push(index);
    } 
    this.setState({pokis: pokiId});
  }

  handlePokeImgClick = async(arg) => {
    const { count,checkDup } = this.state;
    if (count<=6) {
      if (!checkDup.includes(arg)) {
      const { addToPokemon } = this.props;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arg}`);
      const {id, abilities, height, moves, name, species, weight } = response.data;
      let hash = {};
      hash = {id, abilities, height, moves, name, species, weight};
      addToPokemon(hash);
      this.setState({
        count: this.state.count+1,
        checkDup: [].concat(arg),
        message: "",

      });
      } else {
        this.setState({message: "Already selected, kindly select a new pokemon"});  
      }
    }else{
      this.setState({message: "You have exhausted your max choice of six"});
    }

  }
  
  componentDidMount = () => {
    this.getAllPokemons();
  }

  render() {
    const { pokis, message } = this.state;
    return (
      <div className = "rightComp overflow-auto">
        <h1 className="position-absolute mr-5 message">
          { message === "" ? (<img src={Gif} alt="oops"/>): message }
        </h1>
        <Header headerText = "Poke Dex Area" />
        <div className="container">
          <div className="row ">
            { pokis.map( record =>
            <div key={shortid.generate()} className="col-5 col-lg-2 p-3">
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
  addToPokemon: pokemonId => dispatch(addInfo(pokemonId))
});

export default connect(null, mapDispatchToProps)(Right);