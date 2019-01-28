import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  public works = [];

  constructor(private data: DataService) {

  }

  ngOnInit() {

    this.data.searchResult$.subscribe(
      data => {
        this.works = data.work;
      });

  }

}
