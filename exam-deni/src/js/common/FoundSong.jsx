import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {Song } from './Songs';
import {filterSong} from '../services/getCreateSongs';

class FoundSongsView extends Component {
  constructor(props) {
    super(props);

    this.getSong = this.getSong.bind(this);

    this.state = {
      searchResults: [],
      notfound: false
    };
  }

  getSong(title) {


    let props_songs = this.props.songs[0].song;

    let _this = this;

    var result = props_songs.filter(function( obj ) {

        return obj.title.toLowerCase() == title.toLowerCase();
    });


    if(result.length){
        this.setState({ searchResults: result }); 
    }

  }

  componentDidMount() {
    const params = queryString.parse(window.location.search);

    if (!!params.title) {
      this.getSong(params.title);
    } else {
       this.setState({ notfound: true }); 
    }
  }

  render() {
    if (this.state.notfound) {
      return (<h1>Song not found</h1>);
    }
    return (
      <div>
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

function mapStateToProps(songs) {
    return songs;
}

export default connect(mapStateToProps, null)(FoundSongsView);