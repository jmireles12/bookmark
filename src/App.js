import React, { Component } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8081/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer $2a$10$2P/DSQbxtTeN3QS5q6/zzefuG91csE/TSxCixjD4md.z4krB/15tW',
        'Content-Type': 'application/json'
      }
    };

    fetch(url, options)
      .then(res => { 
        if(!res.ok) {
          throw new Error('something went wong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    });
  }

  render() {
    const page = this.state.showAddForm
      ? <AddBookmark
          showForm={show => this.setShowAddForm(show)}
          handleAdd={bookmark => this.addBookmark(bookmark)}/>
      : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)}/>
    return (
      <div className='App'>
        { page }
      </div>
    );
  }
}
export default App;