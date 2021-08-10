import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from '../app/services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'admin-panel';
  userIsAuthenticated=false;
  private authListenerSubs: Subscription = new Subscription;
constructor(private authService:ServicesService) { }

  ngOnInit(): void {
    // this.userIsAuthenticated=this.authService.getIsAuth();
    // this.authListenerSubs=this.authService.getMessage()
    //  .subscribe((isAuthenticated: boolean)=>{
    //     this.userIsAuthenticated=isAuthenticated;
    //  })
  }

  // onLogout(){
  //   this.authService.logout();
  // }

  ngOnDestroy(){
      this.authListenerSubs.unsubscribe();
  }

}
