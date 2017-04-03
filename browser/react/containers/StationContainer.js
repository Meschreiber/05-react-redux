import { connect } from 'react-redux';

import Station from '../components/Station';
import { convertSong } from '../utils.js'
import { toggleSong } from '../action-creators/player'

const mapStateToProps = (state, ownProps) => ({
    genreName: ownProps.params.genreName,
    songs: state.songs
        .filter(song => song.genre === ownProps.params.genreName)
        .map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
}
)

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
