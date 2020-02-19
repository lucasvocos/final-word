import React from 'react';
import './Form.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = { 
      formHeight: null
    }
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  resizeTextArea = e => {
   
    const wrapper = document.getElementById('capture')
    const notepad = document.querySelector('.notepad')
    
    if (notepad.scrollHeight > 768) {
      wrapper.style.height = `1px`
      wrapper.style.height = `${notepad.scrollHeight + 125}px`
      wrapper.style.minHeight = `${notepad.scrollHeight + 125}px`
      notepad.style.minHeight = `1px`
      notepad.style.minHeight = `${notepad.scrollHeight}px`
      notepad.style.paddingBottom = '500px'
    } else {
      notepad.style.paddingBottom = '0px'
      notepad.style.minHeight = `768px`
      notepad.style.scrollHeight = '768px'
      notepad.style.height = `768px`
    }
    
  }

  render() {
    return (
      <form className='tiny-hands-form' ref={this.textInput}>
        <label htmlFor='notepad' className='hidden'>Note</label>
        <textarea
          name='notepad'
          className='notepad'
          autoFocus
          placeholder='Start typing your stab le Genius note'
          wrap="hard"
          cols="75"
          data-gramm="false"
          resize='none'
          onInput={this.resizeTextArea}
          spellCheck={false}></textarea>
      </form>
    )
  }
}
