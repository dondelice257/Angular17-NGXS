import { post } from "../../interfaces/post";

export class AddPost{
    static readonly type= '[Post page] AddPost';
    constructor(public payload: post){}
}


export class RemovePost{
    static readonly type= '[Post page] RemovePost';
    constructor(public id: string){}
}