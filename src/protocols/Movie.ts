export type MovieEntity = {
    id: number, 
    name: string, 
    platform: string, 
    genre: string, 
    watched: boolean, 
    createdAt: string | Date
};

export type Movie = Omit<MovieEntity, "id" | "watched" | "createdAt">;

export type NewMovie = Partial<MovieEntity>;