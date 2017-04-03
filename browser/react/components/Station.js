import React from 'react';
import Songs from './Songs';

export default function (props) {
//   console.log('from Station.js', props.songs[0])
  return (
    <div>
      <h3>{props.genreName } Station</h3>
      <Songs 
        songs={props.songs} 
        currentSong={props.currentSong} 
        isPlaying={props.isPlaying} 
        toggleOne={props.toggleOne}
      />
    </div>
  );
}