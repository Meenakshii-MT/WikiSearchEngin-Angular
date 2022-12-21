import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'Angular-Task';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;

  constructor(private wiki: WikiService, private route: Router) { }

  onSubmit() {
    this.wiki.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;

      this.totalResults = res.query.search.length;
      console.log(this.results);
    });
  }
  onSelect(title: any) {
    console.log(title);
    this.route.navigate(['details', title])
  }
}
