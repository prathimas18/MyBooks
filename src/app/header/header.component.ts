import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  appTitle: string = "MyBooks";
  searchUrl: string = "https://reststop.randomhouse.com/resources/works/?start=0&max=6&expandLevel=1&search=";
  searchText: string = "";
  concatUrl: string;
  isSearchError: boolean;



  constructor(private http: HttpClient, private data: DataService, private router: Router) { }

  ngOnInit() {
  }



  onSubmit() {
    if (this.searchText !== "") {
      let sanitizedText = this.sanitizeText(this.searchText);
      if (sanitizedText == "") {
        this.isSearchError = true;
        return;
      }
      this.isSearchError = false;
      this.concatUrl = this.searchUrl + sanitizedText;
      this.http.get(this.concatUrl).subscribe(data => {
        this.data.searchResults(data);
        this.router.navigate(['/books']);
      });
    }
  }

  sanitizeText(searchValue) {
    return searchValue.replace(/[^\w\s]/gi, '');
  }

}
