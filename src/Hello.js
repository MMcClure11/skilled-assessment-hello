//Build a react class component called Hello
//that returns an h1 with "Hello"

// make a constructor, assume it accepts props, with state helloTranslations set to an empty array

// assume you have an endpoint of this.props.helloTranslations = 'https://hello/translations'
// What kind of function would you set this up in?
// componentDidMount()
// make a fetch to that endpoint 
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
    //I did not remember the exact syntax for fetch, asked to use MDN, he said let's not since I most likely won't be able to in an interview setting
    //he mentioned the first arg is the endpoint you want to hit, optional second arg of {} with all your headers such as 'POST' etc
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}