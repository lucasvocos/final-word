import React from 'react';
import './Form.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <form className='tiny-hands-form' ref={this.textInput}>
        <label htmlFor='notepad' className='hidden'>Note</label>
        <textarea
          name='notepad'
          className='notepad'
          autoFocus
          placeholder='Start typing your stable genius note'
          wrap="hard"
          cols="75"
          spellCheck={false}></textarea>
      </form>
    )
  }
}
