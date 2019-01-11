import { Component } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = [ 'Angular','React','Node'];
  public User = new user("Sarthak", "ahsbahb@as.com",98767899876,"Angular","Morning",true);
  public abcd = true;
}
