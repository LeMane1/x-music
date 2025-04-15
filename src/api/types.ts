export interface ITags{
  "genres": string[],
  "instruments": string[],
  "vartags":string[]
}

export interface IMusicInfo{
  "vocalinstrumental": string;
  "lang": string;
  "gender": string;
  "acousticelectric": string;
  "speed": string;
  "tags": ITags;
}

export interface ITrack {
  "id": string;
  "name": string;
  "duration": number;
  "artist_id": string;
  "artist_name": string;
  "artist_idstr": string;
  "album_name": string;
  "album_id": string;
  "license_ccurl": string;
  "position": number;
  "releasedate": string;
  "album_image": string;
  "audio": string;
  "audiodownload": string;
  "prourl": string;
  "shorturl": string;
  "shareurl": string;
  "waveform": string;
  "image": string;
  "musicinfo": IMusicInfo;
  "stats": unknown;
  "audiodownload_allowed": boolean;
}

export interface IHeader {
  "status": string;
  "code": number;
  "error_message": string;
  "warnings": string;
  "results_count": number;
}

export interface IGetTracksResponse {
  "headers":IHeader;
  "results": ITrack[];
}