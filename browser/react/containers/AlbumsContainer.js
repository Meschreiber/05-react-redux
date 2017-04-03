import React, {Component} from 'react';
import Albums from '../components/Albums';
import { connect } from 'react-redux';



const mapStateToProps = (state) => ({albums: state.albums.list})


const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
