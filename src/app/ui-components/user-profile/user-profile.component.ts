import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApplicationSettingsService} from "../../services/application/application-settings.service";
import {ThemeType} from "../../services/application/models/theme-type.enum";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public currentTheme: ThemeType = ThemeType.LIGHT;
  public themeType = ThemeType;

  @Output() userProfileShownEvent = new EventEmitter();

  constructor(private settings: ApplicationSettingsService) { }

  ngOnInit(): void {
    this.currentTheme = this.settings.currentTheme;
  }

  public onThemeClicked(theme: ThemeType) {
    this.currentTheme = theme;
    this.settings.currentTheme = this.currentTheme;
  }
}
