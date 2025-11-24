import { Cancion } from "./cancion";
export class AlbumTrack{
    constructor(
        public id: number,
        public spotifyId: string,
        public name: string,
        public year: number,
        public loved: boolean,
        public image: string,
        public songs: Cancion[]
    ){}

    clone(): AlbumTrack{
        return new AlbumTrack(
            this.id,
            this.spotifyId,
            this.name,
            this.year,
            this.loved,
            this.image,
            this.songs.map(song => song.clone())
        );
    }
}