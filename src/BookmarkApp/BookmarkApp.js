import React, { Component } from 'react';
import './BookmarkApp.css';
import BookmarkList from '../BookmarkList/BookmarkList';
import Fab from '../Fab/Fab';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks}/>
        <Fab showForm={this.props.showForm}/>
      </div>
    );
  }
}

export default BookmarkApp;