import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar';

const mapState = (state) => ({playlists: state.playlists.list})

export default connect(mapState, {})(Sidebar)
