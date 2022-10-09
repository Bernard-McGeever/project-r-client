import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isUserProfileShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onUserProfileClicked(event: MouseEvent) {
    event.stopPropagation();
    this.isUserProfileShown = !this.isUserProfileShown;
  }

  public hideUserProfile(event: Event) {
    this.isUserProfileShown = false;
  }

}
