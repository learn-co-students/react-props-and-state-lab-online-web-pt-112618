import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    return (
    <div className="ui cards">
      {this.props.pets !== [] ? this.props.pets.map(pet => <Pet pet={pet} isAdopted={this.props.adoptedArray} onAdoptPet={this.props.onAdoptPet} key={pet.id}/>) : []}
    </div>
    )
  }
}

export default PetBrowser
