/**
 * Created by sukumar on 14-10-2017.
 */
import {Component,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
  title:'Recipe Book';

  @Output() routeEvent = new EventEmitter<string>();

  filterView($event) {
    var route = $event.target.innerText;
    if (route && route.length) {
      this.routeEvent.emit(route);
    }
  }
}
