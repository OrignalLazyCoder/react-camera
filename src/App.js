import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      image : ""
    }
  }

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    var base64Img = require('base64-img');
    console.log(dataUri);
    console.log('takePhoto');
    this.setState({
      image : dataUri
    })
  }

  render () {
    return (
      <div className="App">
        <div>
          <h1>Click button to capture image and click captured image to download it</h1>
        </div>
          <div>
            <div className="CameraView">
              <Camera
                onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
              />
            </div>
            <div className="ImageView">
              <h4>Image will appear here</h4>
              <a href={this.state.image} download><img src={this.state.image} /></a>
            </div>
        </div>
      </div>   
    );
  }
}

export default App;
