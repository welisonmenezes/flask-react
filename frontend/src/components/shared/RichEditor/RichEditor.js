import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import AudioIcon from '../../../images/speaker.svg';
import './RichEditor.css';

class RichEditor extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  toolbarConfig = {
    'container': '#toolbar',
    'handlers':{
      'audio': function(value) {
        console.log(value)
        if (value) {
          var inpval = prompt('Enter the URL');
          if (inpval) {
            alert(encodeURIComponent(inpval))
            var url = 'https://w.soundcloud.com/player/?url=' + encodeURIComponent(inpval) + '&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            this.quill.format('video', url);
          } else {
            this.quill.format('video', false);
          }
        } else {
          this.quill.format('video', false);
        }
      }
    }
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div className='RichEditor'>
          <div id='toolbar'>
            <span className='ql-formats'>
              <select className='ql-header'>
                <option value='2'>Título 2</option>
                <option value='3'>Título 3</option>
                <option value='4'>Título 4</option>
                <option value='5'>Título 5</option>
                <option value='6'>Título 6</option>
              </select>
              <select className='ql-size'>
                <option value='small'></option>
                <option value='normal'></option>
                <option value='large'></option>
                <option value='huge'></option>
              </select>
            </span>
            <span className='ql-formats'>
              <button className='ql-bold'></button>
              <button className='ql-italic'></button>
              <button className='ql-underline'></button>
              <button className='ql-strike'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-script' value='sub'></button>
              <button className='ql-script' value='super'></button>
            </span>
            <span className='ql-formats'>
              <select className='ql-align'>
                <option></option>
                <option value='center'></option>
                <option value='right'></option>
                <option value='justify'></option>
              </select>
              <button className='ql-list' value='ordered'></button>
              <button className='ql-list' value='bullet'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-blockquote'></button>
              <button className='ql-code-block'></button>
              <button className='ql-link'></button>
            </span>
            <span className='ql-formats'>
              <button className='ql-image'></button>
              <button className='ql-video'></button>
              <button className='ql-audio' value='audio'>
                <img  src={AudioIcon}  alt='' />
              </button>
            </span>
            <span className='ql-formats'>
              <button className='ql-clean'></button>
            </span>
          </div>
          <ReactQuill value={this.state.text} modules={{toolbar: this.toolbarConfig }} onChange={this.handleChange} />
      </div>
    );
  }
}


export default RichEditor;
