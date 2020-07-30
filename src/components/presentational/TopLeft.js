import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Logo from '../presentational/832.gif';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


class TopLeft extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       information: "",
       pokemon: {},
       pokeAbility: []
       
    }
  }

  handlePokeImgSelection = async (arg) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${arg}`);
    const {id, abilities, height, moves, name, species, weight } = response.data;
    let hash = {};
    hash = {id, abilities, height, moves, name, species, weight};
    abilities.forEach(async(element) => {
      await this.setState({ pokeAbility: this.state.pokeAbility.concat(element.ability.name)})
    });
    await this.setState({pokemon: hash});
  }

  componentDidMount = () => {
    const { myList } = this.props;
    if (myList.length === 0) {
      this.setState({information: "select a pokemon from poke dex area"})
    }
  }
  render() {
    const { myList } = this.props;
    const { pokemon, pokeAbility } = this.state;
    console.log(pokeAbility)
    return (
      <div>
      <div className = "topLeftComp">
      <Header headerText = "Pokemon Line up"/>
      <div className="container">
         <div className="row">
          { myList.map( data =>
          <div key={shortid.generate()} className="col-4 col-sm-4 col-lg-4 pokemon-pad-left rounded p-0  p-sm-2 p-lg-3 shadow-lg">
            <h3 className="name-of-pokemon"> 
            <FontAwesomeIcon icon = { faTimesCircle } className="float-left pink"/> {data.name}
            </h3>
            <img 
              src = {`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} 
              alt="pokemon-detail-img"
              onClick = {()=>this.handlePokeImgSelection(data.id)}
            />
          </div>
          )}
          </div>
        </div>
      </div>
        <div className = "container bottomLeftComp">
          <Header headerText = "Pokemon Data"/>
          <div className="row">
            <div className="col-5 bottom p-2">
              {Object.keys(pokemon).length === 0 ? (<div>  <img src={Logo} alt="pokemon-show"/> </div>):
              <img 
                src = {`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} 
                alt="pokemon-show"
              /> 
              }
            </div>

            <div className="col-7 bottom p-2 mx-auto">
            {Object.keys(pokemon).length === 0 ? (<div> </div>):
              <div>
                <h3 className="name-of-pokemon-detail text-capitalize"> {pokemon.name}</h3>
                <h6 className="weight-of-pokemon-detail"> {pokeAbility.length} abilities</h6>
                <div className="d-flex">
                  {pokeAbility.map((ability) => <h6 className="abilities-of-pokemon-detail"> {ability}, </h6>)}
                </div>
                <h6 className="weight-of-pokemon-detail"> {pokemon.weight} units weight</h6>
                <h6 className="height-of-pokemon-detail"> {pokemon.height} units tall</h6>
              </div>
              }
            </div>

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
