import { Component } from '@angular/core';
import { MainMenuComponent } from './menus/main-menu';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MainMenuComponent],
  template: `<app-main-menu></app-main-menu>`
})
export class AppComponent {
  title = 'web-app';
}
