import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Help center - Pages';
  }
}
