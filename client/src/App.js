import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    //song make a call to our rails server to get songs
  }

  addsong = (name) => {
    //song make api call to rails server to add song
    const { songs } = this.state;
    //song update state
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
  this.setState({ songs: [...songs, { id, name }] });
  }

  updateSong = (id) => {
    //song make api call to update song
    //song update state
    let todos = this.state.todos.map( t => {
      if (t.id === id)
        return { ...t, complete: !t.complete }
      return t;
    });
  
    this.setState({ todos });
  }

  deleteTodo = (id) => {
    //TODO make api call to delete todo
    const { songs } = this.state;
    this.setState({ songs: songs.filter( t => t.id !== id ) })
  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addsong} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updatesong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}
//i am the collest programmer ever!


export default App;