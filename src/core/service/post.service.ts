import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { PostResponse } from "models/reponse/post.response";
import BaseHttpClientService from "./basehttpclient.service";

export interface IPostService {
    getPosts(): Observable<PostResponse[]>;
    getPost(): Observable<PostResponse>;
}

export class PostService extends BaseHttpClientService {

    constructor() {
        super();
    }

    public getPosts(): Observable<PostResponse[]> {
        return this.http.get<PostResponse[]>("https://jsonplaceholder.typicode.com/posts")
            .pipe(map(result => {
                return result.data;
            }), catchError((error) => {
                return throwError(error.response.data);
            }));
    }

    public getPost(id: number): Observable<PostResponse> {
        return this.http.get<PostResponse>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .pipe(map(result => {
                return result.data;
            }), catchError((error) => {
                return throwError(error.response.data);
            }));
    }

}