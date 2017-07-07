import React, { Component } from 'react';
import CommentList from './comment_list';

export default class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = { comment: ''};
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className='comment-box'>
        <textarea 
          value={this.state.comment}
          onChange={this.onHandleChange.bind(this)}/>
        <button action="submit">Submit button</button>
      </form>
    );
  }
}