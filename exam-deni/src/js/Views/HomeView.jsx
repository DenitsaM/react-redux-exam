import React, { Component } from 'react';
import SongDetail from '../common/Songs';
import SongsSearchEngine from '../common/searchSongs';
import SongsView from './SongsView';

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
       <div>
            <div><SongsSearchEngine/></div>
            <div><SongsView/></div>
       </div>
       );
  }
}

export default HomeView;