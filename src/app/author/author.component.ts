import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SplitTextPipe } from '../split-text.pipe';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})
export class AuthorComponent implements OnInit {

  public authorTitle = "Featured Authors";
  public authorDetails: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getDataOfMutipleAuthors().subscribe(authorList => {
      this.authorDetails = authorList;
    })
  }

}
