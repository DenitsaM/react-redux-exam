import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistView from '../Views/PlaylistView';
function Sidebar(props) {
  return (
    <aside className="site-sidebar">
      <nav className="side-nav">
        <ul>
          <li><Link to="/create-playlist">Create Playlist</Link></li>
        </ul>
      </nav>

      <hr />

      <h4>Your Playlists:</h4>
      <PlaylistView/>
    </aside>
  );
}

export default Sidebar;
