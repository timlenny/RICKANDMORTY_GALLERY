import {Origin} from "./Origin";

export type Character = {
    id: number,
    name: string,
    origin: Origin,
    status: string,
    image: string,
    species: string,
    type: string,
    gender: string,
    location: string[],
    episode: string[],
    url: string

}