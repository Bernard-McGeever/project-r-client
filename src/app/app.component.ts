import {Component, OnInit} from '@angular/core';
import {ApplicationSettingsService} from "./services/application/application-settings.service";
import {ThemeType} from "./services/application/models/theme-type.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "[class.dark-theme]": "( theme === 'dark')",
    "[class.light-theme]": "( theme === 'light')",
  }
})
export class AppComponent implements OnInit {
  title = 'project-r-client';
  public theme = '';

  constructor(private settings: ApplicationSettingsService) {
  }

  ngOnInit(): void {
    this.settings.subscribeToTheme(themeType => {
      this.applyTheme(themeType);
    });
  }

  private applyTheme(themeType: ThemeType): void {
    themeType === ThemeType.DARK ? this.theme = 'dark' : this.theme = 'light';
  }
}
