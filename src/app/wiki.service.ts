import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  private baseURL = 'https://en.wikipedia.org/w/api.php';
  private select = 'https://en.wikipedia.org/api/rest_v1/page/summary';


  constructor(private http: HttpClient) { }

  search(data: any) {
    return this.http.get(this.baseURL, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: data,
        origin: '*',
        srlimit: 100,
      },
    });
  }
  selectedItems(title: any) {
    return this.http.get(this.select + '/' + title)
  }
}