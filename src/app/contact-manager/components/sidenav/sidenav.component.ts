import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  public isScreenSmall: boolean | undefined; 

  users: Observable<User[]>; //Declare observable along with user model
  
  constructor(private breakpointObserver:BreakpointObserver, private userService: UserService) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(maxWidth: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
     })
     this.users = this.userService.users; // Initialize users observable
     this.userService.loadAll();

     this.users.subscribe(data => {    
        console.log(data)
     })
  }

}
