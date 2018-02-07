import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  @Input('errors') errors: string[] = [];
  @Input('messages') messages: string[] = [];
  constructor() { }

  ngOnInit() {
  }

}
