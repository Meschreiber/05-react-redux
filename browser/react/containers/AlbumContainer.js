import { connect } from 'react-redux';
import Album from '../components/Album';
import { toggleSong } from '../action-creators/player';

const mapState = function (state, ownProps) {
  console.log('from AlbumContainer.js state:', state);
  return {
    selectedAlbum: state.albums.selected,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  }

}

const mapDispatch = (dipatch, ownProps) => ({
  toggleOne: function (song, list) {
    dispatch(toggleSong(song, list));
  }
})

export default connect(mapState, mapDispatch)(Album)
