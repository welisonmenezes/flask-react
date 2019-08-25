import React, { Component } from 'react';

import RichEditor from '../shared/RichEditor/RichEditor';

class Admin extends Component {

  encodeImageFileAsURL() {
    var element = document.getElementById('files');
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result);
      document.getElementById('base64').value = reader.result;
      document.getElementById('image').src = reader.result;
    }
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <div className='Admin'>
        <RichEditor></RichEditor>
        <hr />
        <h2>Exemplo convert image to base64</h2>
        <input type="file" id="files" name="files" onChange={() => {this.encodeImageFileAsURL()}} />
        <br/>
        <textarea id="base64" rows="5"></textarea>
        <br />
        <img id="image" src="" alt=""></img>
      </div>
    );
  }
}


export default Admin;
