import React, { Component } from 'react';

import styles from '../styles/PlayerVolume.module.css';
import stylesHelpers from '../../../assets/css/helpers.module.css';


import { ReactComponent as IcoVolume } from '../../../assets/img/ico/ico-volume.svg';
import { ReactComponent as IcoVolumeUp } from '../../../assets/img/ico/ico-volume-up.svg';
import { ReactComponent as IcoVolumeDown } from '../../../assets/img/ico/ico-volume-down.svg';

import { PlayerService } from '../../../services';

type State = {
  isVisible: boolean;
}

type Props = {
  volume: number;
  setLoading: (v: boolean) => void;
};

class VolumeControl extends Component<Props, State> {
  readonly state: State = {
    isVisible: false
  }

  private toggleIsVisible = () => {
    const { isVisible } = this.state;

    this.setState({
      isVisible: !isVisible
    });
  }


  private volumeUp = () => {
    this.props.setLoading(true);
    PlayerService.getInstance().increaseVolume();
  }

  private volumeDown = () => {
    this.props.setLoading(true);
    PlayerService.getInstance().decreaseVolume();
  }

  public render() {
    const { isVisible } = this.state;
    const { volume } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={`${styles.icoVolWrapper} ${stylesHelpers.pointer}`} onClick={this.toggleIsVisible}>
          <IcoVolume className={styles.ico} />
        </div>

        <div className={`${styles.control} ${isVisible ? styles.show : ''}`}>
          <div className={styles.playerVolume}>{volume} %</div>
          <div onClick={this.volumeUp} className={stylesHelpers.pointer}>
            <IcoVolumeUp className={styles.ico} />
          </div>
          <div onClick={this.volumeDown} className={stylesHelpers.pointer}>
            <IcoVolumeDown className={styles.ico} />
          </div>
        </div>
      </div>
    );
  }
}

export default VolumeControl;