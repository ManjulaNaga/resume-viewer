import React, { Component } from 'react';
import axios from 'axios';

class UploadFile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadUrl: '',
    };
  }

  handleUploadFile = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', event.target.files[0]);
    data.append('name', 'some value user types');
    data.append('description', 'some value user types');

    fetch('http://localhost:8000/upload', {
     method: 'POST',
     body: data,
    }).then((response) => {
     response.json().then((body) => {
       this.setState({ uploadUrl: `http://localhost:8000/${body.file}` });
     });
   });
  }
    render() {
      return(
      <div>
        Upload latest resume here<br/>
        <input type="file" onChange={this.handleUploadFile} />
        {this.state.uploadUrl}
      </div>
      );
}
}

export default UploadFile;
