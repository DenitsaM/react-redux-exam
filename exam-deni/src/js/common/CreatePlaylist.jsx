import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createPlaylistActionCreator } from '../actions/action-creators';
import PlaylistView from '../Views/PlaylistView';

class CreatePlaylistEngine extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.createPlaylist = this.createPlaylist.bind(this);

    this.state = {
      songs_type: "",
      id: ""
    };
  }

  handleChange({ target }) {
    this.setState({ songs_type: target.value });
  }

  createPlaylist(e) {
    e.preventDefault();
    const { songs_type, id } = this.state;
    let props_songs = this.props.songs[0].song;
    let _this = this;

    var result = props_songs.filter(function( obj ) {
        return obj.songs_type == _this.state.songs_type;
    });

    if(result.length){
        this.props.savePlaylist(result, songs_type);
    }

    //return result;

  }

  render(props) {
    const { songs_type } = this.state;
    return (
      <section className="home-view container">
        <div className="row justify-center">
          <div className="col-12">
            <form onSubmit={this.createPlaylist}>
              <div className="form-group">
              <label>Create playlist by genre:</label>
                <input
                  type="text"
                  id="song"
                  className="form-control"
                  value={songs_type}
                  onChange={this.handleChange}
                />
              </div>
              <button className="btn btn-primary">
                  Create
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({songs, playlists}) {
    return {songs, playlists};
}

function mapDispatchToProps(dispatch) {
  return {
    savePlaylist(songsArray, songs_type) {
      const action = createPlaylistActionCreator(songsArray, songs_type);

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistEngine);
