import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { newValue } = this.props;
    return (
      <div className='Admin'>
        O state é: { newValue }
        <hr />
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


const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
export default connect(mapStateToProps)(Admin);
