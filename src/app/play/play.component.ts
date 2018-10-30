import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router/';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit{
  title = 'aliensearch';
  url:string;
  constructor(
    private route:ActivatedRoute,
    private router:Router){}
  ngOnInit(){

    this.route.queryParams.subscribe((queryParams)=>{
        if(queryParams['v'] == null)
          this.router.navigate(['/']);
        else {
          this.url = queryParams['v'];
        }
      });
  }
}
