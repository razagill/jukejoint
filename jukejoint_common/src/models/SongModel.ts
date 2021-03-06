// Utils
// Constants
import { PROVIDERS } from '../util/const';
// Actions
// Models
import { YoutubeDTO, BandcampDTO } from '../models';
// Interfaces
import { ProvidersDTOType } from '../interfaces';
// Components

export default class SongModel {
  title:string = '';
  artist:string = '';
  album:string = '';
  artWork:string = '';
  url:string;
  providerType:PROVIDERS;

  public static buildFromProvider = (provider:ProvidersDTOType, providerType:PROVIDERS, url:string) => {
    const newSong = new SongModel();
    newSong.url = url;
    newSong.providerType = providerType;

    if (provider instanceof BandcampDTO) {
      newSong.title = provider.title;
      newSong.artist = provider.artist;
      newSong.album = provider.album;
      newSong.artWork = provider.image;
    }

    if (provider instanceof YoutubeDTO) {
      newSong.title = provider.title;
      newSong.artWork = provider.thumbnailURL;
    }

    return newSong;
  }
}