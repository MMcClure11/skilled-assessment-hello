//Build a react class component called Hello
//that returns an h1 with "Hello"

// make a constructor, assume it accepts props, with state helloTranslations set to an empty array

// assume you have an endpoint of this.props.helloTranslations = 'https://hello/translations'
// What kind of function would you set this up in?
// componentDidMount()
// 
import React, { Component } from 'react'

export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      helloTranslations: []
    }
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}