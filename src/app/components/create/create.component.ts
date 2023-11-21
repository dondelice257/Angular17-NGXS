import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { post } from '../../interfaces/post';
import { Store } from '@ngxs/store';
import { AddPost } from '../store/posts.actions';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  //get the store
  public store = inject(Store);


  public postForm = new FormGroup({
    title: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),
    description: new FormControl<string | null>("", {validators:[Validators.required], nonNullable: true}),  
  });

  public addPost = () => {
   
    const {title, description} = this.postForm.value;

    const _post: post = {
      id: Date.now().toString(),
      title: title,
      description: description
    }
   

    //dispatch the action
    this.store.dispatch(new AddPost(_post));

    //reset
    this.postForm.reset();

  }
}
