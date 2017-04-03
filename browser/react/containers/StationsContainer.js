import { connect } from 'react-redux';

import Stations from '../components/stations';

const songsToStations = (songs) => {
	const stations = {};

  	songs.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
}

const mapStateToProps = (state) => ({stations: songsToStations(state.songs)})

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);