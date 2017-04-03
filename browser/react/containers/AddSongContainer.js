import React from 'react';
import AddSong from '../components/AddSong';

import {connect} from 'react-redux'
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { songId: 1, error: false}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {

  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });

  //   store.dispatch(loadAllSongs());

  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

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

    this.props.addSongToPlaylist(playlistId, songId)
  }

  render() {

    const songs = this.state.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.state}
        songs={songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

const mapState = (state) => ({playlists: state.playlists})
const mapDispatch = {addSongToPlaylist}
export default connect(mapState, mapDispatch)(AddSongContainer)