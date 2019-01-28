import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  public events = [];
  public errorStatus = false;
  public errorMessage = " ";

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe((data) => {
      this.errorStatus = false;
      this.errorMessage = "";
      this.events = data.authorEvent,
        (error) => this.errorMessage = error; this.errorStatus = true;

    });
  }



}
