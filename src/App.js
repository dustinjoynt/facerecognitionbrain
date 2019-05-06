import React, { Component  } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/navigation/Navigation.js'
import Logo from './components/logo/Logo.js'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm.js'
import Rank from './components/rank/Rank.js'
import FaceRecognition from './components/facerecognition/FaceRecognition.js'
import './App.css'

const app = new Clarifai.App({
  apiKey: 'a06811fc73504534979228ceccb81340'
 })

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
  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    })
    console.log('click')
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  )
  }

  render() {
  return (
    <div className="App">
    <Particles className='particles'
                params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange = {this.onInputChange} 
        onButtonSubmit = {this.onButtonSubmit} 
      />
      <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
  )
}
}

export default App
