import React, { Component } from 'react';


// Utils
// Constants
// Actions
// Models
// Interfaces
// Components
import { Header } from '../pod/header/components';
// Styles
import stylesHelpers from '../assets/css/helpers.module.css';

import PlayerContainer from '../pod/player/PlayerContainer';
import PlaylistContainer from '../pod/playlist/PlaylistContainer';

export default class HomeRouter extends Component {

  render() {
    return (
      <div className={stylesHelpers.fullHeight}>
        <Header />

        <div className={`${stylesHelpers.wrapper} ${stylesHelpers.maxWidth1000} ${stylesHelpers.margin0auto}`}>
          <PlaylistContainer />
        </div>

        <PlayerContainer />
      </div>
    );
  }
}