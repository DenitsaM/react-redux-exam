import React, { Component } from 'react';
import PlayLists from '../common/PlayLists';

class PlaylistView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   return <PlayLists />;
  }
}

export default PlaylistView;
