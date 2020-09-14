import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  collapsed = false;
  @Output() pageToShow = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
 menuClicked(passedValue: string){
  this.pageToShow.emit(passedValue);
}
}
