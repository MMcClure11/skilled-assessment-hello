//take this component and rewrite it as a functional component
//you can either write over it directly or write a new component

import React, { useState, useEffect } from 'react'

const Hello = ({ helloTranslations }) => {

  const [translations, setTranslations] = useState([])

  useEffect(() => {
    fetch(helloTranslations)
      .then(response => response.json())
      .then(data => {
        let newArray = data.translations.filter( trans => trans !== 'Hello')
        setTranslations(newArray)
      })
  }, [])

  const renderTranslations = () => {
    return translations.map( trans => <li key={ trans }><button>{ trans} </button></li>)
  }

  return(
    <>
      <h1>Hello</h1>
      <ul>
        { renderTranslations() }
      </ul>
    </>
  )
}

export default Hello

// import React, { Component } from 'react'

// export default class Hello extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       helloTranslations: []
//     }
//   }

//   componentDidMount() {
//     fetch(this.props.helloTranslations)
//       .then(response => response.json())
//       .then(data => {
//         let newArray = data.translations.filter(trans => trans !== 'Hello')
//         this.setState({helloTranslations: newArray})
//       })
//   }

//   logTranslation = (translation) => {
//     console.log(translation)
//   }

//   renderTranslations = () => { 
//     return this.state.helloTranslations.map( trans => 
//      <li key={ trans }><button onClick={ () => this.logTranslation(trans) }>{ trans }</button></li> 
//     )
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello</h1>
//         <ul>
//           { this.renderTranslations() }
//         </ul>
//       </div>
//     )
//   }
// }