//Build a react class component called Hello
//that returns an h1 with "Hello"

// make a constructor, assume it accepts props, with state helloTranslations set to an empty array

// assume you have an endpoint of this.props.helloTranslations = 'https://hello/translations'
// What kind of function would you set this up in?
// componentDidMount()
// make a fetch to that endpoint 

//that data returns an array data.translations = ['Hola', 'Bonjour', 'Hello', etc.]
// access that array and set your state of helloTranslations equal to that array
//but exclude 'Hello'

//display that data: <li><button>Hola</button></li>

//write a function that when a button is clicked it console.logs that translation
import React, { Component } from 'react'

export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      helloTranslations: []
    }
  }

  componentDidMount() {
    fetch(this.props.helloTranslations)
      .then(response => response.json())
      .then(data => {
        let newArray = data.translations.filter(trans => trans !== 'Hello')
        this.setState({helloTranslations: newArray})
      })
  }

  logTranslation = (translation) => {
    console.log(translation)
  }

  renderTranslations = () => { 
    return this.state.helloTranslations.map( trans => 
     <li key={ trans }><button onClick={ () => this.logTranslation(trans) }>{ trans }</button></li> 
    )
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
        <ul>
          { this.renderTranslations() }
        </ul>
      </div>
    )
  }
}