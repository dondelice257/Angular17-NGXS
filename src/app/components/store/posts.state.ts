import { Injectable } from '@angular/core';
import { State, Action, StateContext } from "@ngxs/store";
import { PostsStateModel } from "./posts.model";

//actions
import { AddPost, RemovePost } from './posts.actions';


//define the state
@State<PostsStateModel>({
    name: 'posts',
    defaults: {
        listPosts: []
    }
})

//add this this to the app.config.ts provider -- can create more than one state
@Injectable()
export class PostState{
    constructor(){}

    //create the post action
    @Action(AddPost) addPost(ctx: StateContext<PostsStateModel>, action:AddPost){
        const state = ctx.getState();
        ctx.setState({
            ...state,
            listPosts: [
                ...state.listPosts,
                action.payload
            ]
        })

    }

    //remove the post action
    @Action(RemovePost) removePost(ctx: StateContext<PostsStateModel>, action:RemovePost){
        const state = ctx.getState();
        ctx.patchState({
            listPosts:[
                ...state.listPosts.filter(post => post.id !== action.id)
            ]
        })
    }

}