import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSongsActionCreator } from '../actions/action-creators';
var data = require('./../data/songs.js');

class SongDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: [],
      error: null,
    };
  }

  componentDidMount() {

    this.setState({
        song: data.default
    });

    this.props.saveSong(data.default);

  }

  render() {

    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else {
      return (
          <div className="container">
            {
            this.state.song.map(song =>
                <Song
                    key={song.id}
                    image={song.image}
                    title={song.title}
                    artist={song.artist}
                />
                )
            }
          </div>
        )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveSong(songsArray) {
      const action = loadSongsActionCreator(songsArray);

      dispatch(action);
    }
  };
}
export default connect(null, mapDispatchToProps)(SongDetail);

export function Song(props) {
  return (
    <div>
    <hr/>
      <h2>Song Name: {props.title}</h2>
      <h4>Artist: {props.artist}</h4>
      <img src={props.image} alt="" />
    </div>
  )
}
