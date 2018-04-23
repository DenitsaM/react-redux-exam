import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {Song } from './Songs';
import createHistory from 'history/createBrowserHistory';

class PlayListSongs extends Component {
  constructor(props) {
    super(props);

    this.getSong = this.getSong.bind(this);

    this.state = {
      searchResults: []
    };
  }

  getSong(type) {

    let props_songs = this.props.playlists;
    let _this = this;
    var result ={};
    var result = props_songs.filter(function( obj ) {

        return obj.songs_type.toLowerCase() == type.toLowerCase();
    });

    if(result.length){
        this.setState({ searchResults: result[0].playlists });
    }

  }

  componentDidMount() {
    const history = createHistory();


    let params ='';
    // Listen for changes to the current location


    this.unlisten = this.props.history.listen((location, action) => {
        params = `${location.pathname}`.substr(`${location.pathname}`.lastIndexOf('/') + 1) ;
        this.getSong(params);
    });
    history.listen((location, action) => {
        params = `${location.pathname}`.substr(`${location.pathname}`.lastIndexOf('/') + 1) ;
    });
    // Push a new entry onto the history stack
    history.push({
    pathname: params
    });

    this.getSong(params);
  }

  render() {

    return (
      <div className="container">
        <h1>Info:</h1>

        {
          this.state.searchResults.map(result =>
            <Song
              key={result.id}
              title={result.title}
              artist={result.artist}
              id= {result.id}
              image ={result.image}
            />
          )
        }
      </div>
    );
  }
}

function mapStateToProps({playlists}) {
    return {playlists};
}

export default connect(mapStateToProps, null)(PlayListSongs);
