import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'aliensearch';
  queryFormControl:FormControl;
  
  constructor(private router:Router){
    this.queryFormControl = new FormControl('');
  }
  ngOnInit(){
    
  }
  search(){
    if(this.queryFormControl.value != ""){
        this.router.navigate(['/search'], { queryParams: { q:this.queryFormControl.value }});
    }
  } 
}
