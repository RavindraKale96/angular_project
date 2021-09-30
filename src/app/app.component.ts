import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Testing-app';

  getAlert() {
    alert('hello From Angular');
  }
  getAbout() {
    alert('you are clicked on abutbtn');
  }
}
