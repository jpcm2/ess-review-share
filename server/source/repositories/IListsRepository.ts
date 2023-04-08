import { List, MovieList } from "@prisma/client"

export interface IListsRepository{
    createList(name: string, userId: string): Promise<List>;
    addMovieToList(userId: string, listName: string, movieId: string): Promise<MovieList>;
    showLists(userId: string): Promise<List[]>;
    showMoviesFromList(userId: string, listName: string): Promise<string[]>;
}