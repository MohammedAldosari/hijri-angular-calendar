import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hijriCalender';

  language: FormControl = new FormControl('ar-SA');
  calendarType: FormControl = new FormControl('h');
}
