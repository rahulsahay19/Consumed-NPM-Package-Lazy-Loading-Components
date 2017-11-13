import { Component } from '@angular/core';
import { LoggingService } from 'sample-angular-movies-bundle/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
    title = 'app';

    constructor(private logging:LoggingService){
      logging.logToConsole('This is injected via package');
    }

}
