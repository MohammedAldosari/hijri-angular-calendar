import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarDateFormatter,
  CalendarModule,
  DateAdapter,
  MOMENT,
} from 'angular-calendar';
import { HijriAdapter } from './HijriAdapter';
import moment from 'moment';
import { HijriCalendarMomentDateFormatter } from './HijriCalendarMomentDateFormatter';
import { HijriCalendarComponent } from './hijri-calendar/hijri-calendar.component';
import { registerLocaleData } from '@angular/common';
import localeArSA from '@angular/common/locales/ar-SA';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HijriCalendarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: function () {
        return new HijriAdapter();
      },
    }),
  ],
  exports: [HijriCalendarComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-SA' },
    { provide: LOCALE_ID, useValue: 'en' },
    HijriAdapter,
    {
      provide: MOMENT,
      useValue: moment,
    },
    {
      provide: CalendarDateFormatter,
      useClass: HijriCalendarMomentDateFormatter,
    },
  ],
})
export class HijriModule {
  constructor() {
    registerLocaleData(localeArSA);
  }
}
