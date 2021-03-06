import React, { Component } from 'react';
import styles from '../styles/PlaylistQueue.module.css';
import stylesHelpers from '../../../assets/css/helpers.module.css'

interface IProps {
  description?: string;
  id: string;
  img: string;
  title: string;
  onClick?: (songId: string) => void;
}

class PlaylistQueue extends Component<IProps, any> {

  private onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(`https://www.youtube.com/watch?v=${this.props.id}`);
    }
  }

  public render() {
    const { description, img, title } = this.props;

    return (
      <li onClick={this.onClick}>
        <div className={stylesHelpers.clearfix}>
          {img &&
            <div className={styles.songImgWrapper}>
              <img src={img} alt="song img"/>
            </div>
          }
          <div className={styles.songText}>
            <h3 className={styles.songName}>{title}</h3>
            {description && <p className={styles.songDesc}>{description}</p>}
          </div>
        </div>
      </li>
    );
  }
}

export default PlaylistQueue;