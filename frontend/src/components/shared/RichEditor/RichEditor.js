import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import AudioIcon from '../../../images/speaker.svg';
import './RichEditor.css';

class RichEditor extends Component {

  /* eslint-disable */
  self = null;

  constructor(props) {
    super(props);
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    self = this;
  }

  componentDidMount() {
    this.attachQuillRefs()
  }
  
  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }
  

  toolbarConfig = {
    'container': '#toolbar',
    'handlers':{
      'audio': function(value) {
        console.log(value)
        if (value) {
          self.insertImageIntoEditor(this.quill);
        } else {
          this.quill.format('video', false);
        }
      }
    }
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  insertImageIntoEditor(editor) {
    editor.focus();
    const img = '<img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/o-que-e-html.png" alt="test" style="width:200;float: none;" />';
    const replaced = '##$$image$$##';
    const index = editor.getSelection().index;
    editor.insertText(index, replaced);
    let content = editor.root.innerHTML;
    content = content.replace(replaced, img);
    //setTimeout(() => {
      //editor.root.innerHTML = content;
      editor.clipboard.dangerouslyPasteHTML(content);
      //this.setState({text: content})
    //}, 1);
  }

  addImage() {
    /*
    this.quillRef.focus();
    const img = '<img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/o-que-e-html.png" alt="test" style="width:200;float: right;" />';
    const replaced = '##$$image$$##';
    const index = this.quillRef.getSelection().index;
    this.quillRef.insertText(index, replaced);
    const content = this.quillRef.root.innerHTML;
    const newContent = content.replace(replaced, img);
    setTimeout(() => {
      this.quillRef.root.innerHTML = newContent;
    }, 1);
    */
    this.insertImageIntoEditor(this.quillRef);
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
          <ReactQuill
            ref={(el) => { this.reactQuillRef = el }}
            value={this.state.text}
            modules={{toolbar: this.toolbarConfig }}
            onChange={this.handleChange} />
          <div>
            <button onClick={() => {this.addImage()}}>Add image</button>
          </div>
      </div>
    );
  }
}


export default RichEditor;
