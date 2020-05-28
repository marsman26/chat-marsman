import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login: boolean = true;
	background:boolean = true
  constructor(private router: Router) { 
 	router.events.pipe(
    	filter(event => event instanceof NavigationEnd)  
  	).subscribe((event: NavigationEnd) => {
    	this.background = (event.url === '/') ? true : false; 
  	});
	}

  ngOnInit() {
  }

}
