import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainer extends Component {

  constructor(props) {
    console.log('props:', props)
    super(props);
    this.state = {
      songId: 1,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.state.playlists.selected.id;
    const songId = this.state.songId;

    addSongToPlaylist(playlistId, songId)

  }
}

  render() {

    const songs = this.state.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

const mapState = (state) => ({ songs: state.songs, error: this.state.error, songId: this.state.songId })

const mapDispatch = (dispatch) => ({handleChange: this.handleChange, handleSubmit: this.handleSubmit})

export default connect(mapState)(AddSongContainer);
