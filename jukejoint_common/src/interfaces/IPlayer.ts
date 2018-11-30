import { PROVIDERS } from "../util/const";
import { PlaylistModel, SongModel } from '../models';

interface ISong {
  id: string;
  title: string;
  artist: string;
  artWork: string;
  url: string;
  providerType: PROVIDERS
}

interface IPlayerState {
  volume:number;
  currentSong:SongModel;
  queue:SongModel[];
}

export default IPlayerState;