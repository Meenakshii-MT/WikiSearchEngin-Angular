import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  details: any;

  constructor(private route: ActivatedRoute, private wiki: WikiService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['title']);
    this.wiki.selectedItems(this.route.snapshot.params['title']).subscribe((data: any) => {
      console.log(data);
      this.details = data;
    })
  }

}
