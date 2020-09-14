import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickedOption = 'Recipes';
  //  to navigate the header menu
  headerClicked(receivedData: string) {
    this.clickedOption = receivedData;
  }


}
