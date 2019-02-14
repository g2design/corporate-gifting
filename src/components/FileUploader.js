import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './FileUploader.scss'

class FileUploader extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

      render() {
        return (
          <div>
            <input type="file" onChange={this.handleChange}/>
            <div className="bottle-container">
                <img className="wine-bottle" alt="" src="/images/winebottle.jpg" />
                <Draggable>
                    <img className="logo" alt="" src={this.state.file}/>
                </Draggable>
            </div>
          </div>
        );
      }
  }
  
  export default FileUploader;