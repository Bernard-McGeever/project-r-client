import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public isDarkModeActive: boolean = false;

  @Output() userProfileShownEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public darkModeClicked(event: MouseEvent) {
    event.stopPropagation();
    this.isDarkModeActive = !this.isDarkModeActive;

    this.userProfileShownEvent.emit();
  }

}
