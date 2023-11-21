import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { CreateComponent } from './components/create/create.component';


/** NOTE -- Using standalone components, add the NGXS to providers on the bootstrap config in  app.config.ts
 * line to add -> importProvidersFrom(NgxsModule.forRoot([], {developmentMode: !environment.production}))
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateComponent , PostsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'angngxs';
  public isLoaded:boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      //will set isloaded to true after 3 secs
      this.isLoaded = true;
    }, 3000)
  }
}
