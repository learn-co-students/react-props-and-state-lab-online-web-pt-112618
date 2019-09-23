import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      adoptedArray: []
    }
  }

  handleChange = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    console.log(this.state.filters.type)
    let url = ""
    this.state.filters.type === 'all' ? url = '/api/pets' : url = `/api/pets?type=${this.state.filters.type}`;
    console.log(url)
    fetch(`${url}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  onAdoptPet = (id) => {
    this.state.pets.find(pet => (pet.id === id)).isAdopted = true 
    this.setState({
      adoptedArray: [...this.state.adoptedArray, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={event => {this.handleChange(event)}} onFindPetsClick={event => {this.onFindPetsClick(event)}}/>
          
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedArray={this.state.adoptedArray} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
