import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private routeService:RouteService) { }
  tourGuideCode:string = ""
  ngOnInit(): void {
  }
  validateTourGuideCode() { 
    if(this.authService.login("TG@2022")) { 
      this.routeService.navigateToTourRequestsView(); }     
  } 


}
