import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:5000/test-upload`, formData).then(response => {
      // handle your response;
      console.log(response)
    }).catch(error => {
      // handle your error
      console.log(error)
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form >
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit' onClick={this.submitFile}>Upload</button>
      </form>
    );
  }
}

export default FileUpload;
