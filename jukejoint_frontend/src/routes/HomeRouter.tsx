import React, { Component } from 'react';


// Utils
// Constants
// Actions
// Models
// Interfaces
// Components
import { Header } from '../pod/header';
// Styles
import stylesHelpers from '../assets/css/helpers.module.css';

import PlayerContainer from '../pod/player/containers/PlayerContainer';
import PlaylistContainer from '../pod/playlist/containers/PlaylistContainer';

export default class HomeRouter extends Component {
  render() {
    return (
      <div className={stylesHelpers.fullHeight}>
        <Header />
        <div className={`${stylesHelpers.wrapper} ${stylesHelpers.appWrapper} ${stylesHelpers.margin0auto} ${stylesHelpers.iPhoneXPadding}`}>
          <PlaylistContainer />
        </div>
        <PlayerContainer />
      </div>
    );
  }
}