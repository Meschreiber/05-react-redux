import { connect } from 'react-redux'
import React, {Component} from 'react';

import Lyrics from '../components/Lyrics';
import {searchLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component {

  constructor(props) {
    super(props);
    console.log('props from lyricscontainer.js', props)
    this.state = {
      artistQuery: '',
      songQuery: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.searchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        text={this.props.text}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

// put things you need from your global state in the mapState (or root params (use ownProps))
const mapState = (state) => ({text: state.lyrics.text})
// mapState is passing props to LyricsCONTAINER not Lyrics which can then be used in the render function
const mapDispatch = {searchLyrics}
export default connect(mapState, mapDispatch)(LyricsContainer)

//From Lyrics component
// handleChange={this.handleChange}

