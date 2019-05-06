import React, { Component  } from 'react'
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation.js'
import Logo from './components/logo/Logo.js'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js'
import Rank from './components/rank/Rank.js'
import './App.css'

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  render() {
  return (
    <div className="App">
    <Particles className='particles'
                params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
 {/* {     
      
      <FaceRecognition />} */}
    </div>
  )
}
}

export default App
