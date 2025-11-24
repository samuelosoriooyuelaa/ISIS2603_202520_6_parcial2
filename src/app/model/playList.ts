import { AlbumTrack } from "./albumTrack";

export class PlayList {
    constructor(
    public id: number,
    public spotifyId: string,
    public name: string,
    public image: string,
    public playlistTracks: AlbumTrack[],
){}

clone(): PlayList{
    return new PlayList(
        this.id,
        this.spotifyId,
        this.name,
        this.image,
        this.playlistTracks.map(track => track.clone())
    );
}
    
}
