import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { post } from '../../interfaces/post';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { RemovePost } from '../store/posts.actions';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  //inject the store
  public store = inject(Store);

  //access the state and the slice needed
  public posts$: Observable<post[]> = this.store.select(state => state.posts.listPosts);

  //trackby
  public trackPostById = (idx: number, obj: any) => {
      return obj.id;
  }
  
  //remove from the store
  public remove = (id: string) => {
    this.store.dispatch(new RemovePost(id));
  }

  ngOnInit(): void {
      console.log("component initialized")
  }



}
