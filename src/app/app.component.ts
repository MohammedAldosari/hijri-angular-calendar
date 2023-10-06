import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hijriCalender';

  language: FormControl = new FormControl('ar-SA');
  calendarType: FormControl = new FormControl('h');
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ar');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ar');
    this.language.valueChanges.subscribe({
      next: (value) => {
        if (value.includes('ar')) {
          translate.use('ar');
        } else {
          translate.use('en');
        }
      },
    });
  }
}
