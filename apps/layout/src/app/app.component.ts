import { Component } from '@angular/core';
import { IconService } from '../shared/services/icon.service';

@Component({
  selector: 'anglebrackets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'layout';

  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
