import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PlayLists extends Component {
  constructor(props) {
    super(props);

  }

  render() {

          return (
            <div>
                {
                this.props.playlists.map(result =>
                    <div>
                        <Link to={`/playlist/${result.songs_type}`}>{result.songs_type}</Link>
                    </div>
                    
                )
                }
            </div>
        );
      }
}

function mapStateToProps({playlists}) {
    return {playlists};
}

export default connect(mapStateToProps, null)(PlayLists);