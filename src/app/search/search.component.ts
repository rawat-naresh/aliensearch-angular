import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router/';
import { FormControl } from '@angular/forms';
import {map} from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { escape } from 'querystring';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  title = 'aliensearch';
  queryFormControl:FormControl;
  isSearched:boolean = false;
  searchTitle:string;
  currentPage:number;
  count:number;
  limit:number;
  results:any[];
  
  constructor(
    private apiService:ApiService,
    private route:ActivatedRoute,
    private router:Router,
  ){
    this.queryFormControl = new FormControl('');
  }
  ngOnInit(){
    this.route.queryParams.subscribe((queryParams)=>{
      if(queryParams['q'] == null)
        this.router.navigate(['/']);
      else {
        
        this.search(queryParams);
      }
    });

    this.queryFormControl.valueChanges.pipe(debounceTime(700),distinctUntilChanged()).subscribe((value)=>{
      this.router.navigate([],{ queryParams: { q:value }})
    })


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });

  
  }


  search(searchQuery){

    if(searchQuery != null){
      this.searchTitle = searchQuery['q'];
      this.isSearched = true;
      this.apiService.get('/search',searchQuery).subscribe(
        (data) => {
          this.results = data.results;
          this.currentPage = data.current;
          this.count = data.count;
          this.limit = data.limit;
        }
      ) 
    }
  }

  paginate(event) {
    this.router.navigate([],{ queryParams: { q:this.searchTitle,p:event.page+1 }});
  }

}
