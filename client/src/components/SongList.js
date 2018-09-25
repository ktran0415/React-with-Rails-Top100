import React from 'react';
import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( song => 
        <Song
          key={Song.id}
          {...Song}
          updateSong={updateSong}
          deleteSong={deleteSong}
        />
      )
    }
  </div>
)

export default SongList;