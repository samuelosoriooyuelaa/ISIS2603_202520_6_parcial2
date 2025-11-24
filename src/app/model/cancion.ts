export class Cancion{
    constructor(
        public id: number,
        public spotifyId: string,
        public name: string,
        public minutes: number,
        public seconds: number,
        public loved: boolean
    ){}

    clone(): Cancion{
        return new Cancion(
            this.id,
            this.spotifyId,
            this.name,
            this.minutes,
            this.seconds,
            this.loved
        );
    }
}