import { Injectable } from '@angular/core';
import {
  CalendarDateFormatterInterface,
  DateFormatterParams,
  getWeekViewPeriod,
} from 'angular-calendar';
import * as momentHijri from 'moment-hijri';
import { HijriAdapter } from './HijriAdapter';

/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
@Injectable()
export class HijriCalendarMomentDateFormatter
  implements CalendarDateFormatterInterface
{
  /**
   * @hidden
   */
  constructor(protected dateAdapter: HijriAdapter) {}

  /**
   * The month view header week day labels
   */
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return momentHijri(date)
      .locale(this.dateAdapter.getLocale())
      .format('dddd');
  }

  /**
   * The month view cell day number
   */
  public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
    if (this.dateAdapter.getcalendarType() === 'h') {
      return momentHijri(date)
        .locale(this.dateAdapter.getLocale())
        .format('iD');
    }
    return momentHijri(date).locale(this.dateAdapter.getLocale()).format('D');
  }

  /**
   * The month view title
   */
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    console.log(locale);
    if (this.dateAdapter.getcalendarType() === 'h') {
      return momentHijri(date)
        .locale(this.dateAdapter.getLocale())
        .format('iMMMM iYYYY');
    }
    return momentHijri(date)
      .locale(this.dateAdapter.getLocale())
      .format('MMMM YYYY');
  }

  /**
   * The week view header week day labels
   */
  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    if (this.dateAdapter.getcalendarType() === 'h') {
      return momentHijri(date)
        .locale(this.dateAdapter.getLocale())
        .format('idddd');
    }
    return momentHijri(date)
      .locale(this.dateAdapter.getLocale())
      .format('dddd');
  }

  /**
   * The week view sub header day and month labels
   */
  public weekViewColumnSubHeader({
    date,
    locale,
  }: DateFormatterParams): string {
    if (this.dateAdapter.getcalendarType() === 'h') {
      return momentHijri(date)
        .locale(this.dateAdapter.getLocale())
        .format('iMMM iD');
    }
    return momentHijri(date)
      .locale(this.dateAdapter.getLocale())
      .format('MMM D');
  }

  /**
   * The week view title
   */
  public weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek,
  }: DateFormatterParams): string {
    const { viewStart, viewEnd } = getWeekViewPeriod(
      this.dateAdapter,
      date,
      weekStartsOn!,
      excludeDays,
      daysInWeek
    );
    let format = (dateToFormat: Date, showYear: boolean) =>
      momentHijri(dateToFormat)
        .locale(this.dateAdapter.getLocale())
        .format('MMM D' + (showYear ? ', YYYY' : ''));
    if (this.dateAdapter.getcalendarType() === 'h') {
      format = (dateToFormat: Date, showYear: boolean) =>
        momentHijri(dateToFormat)
          .locale(this.dateAdapter.getLocale())
          .format('iMMM iD' + (showYear ? ', iYYYY' : ''));
    }
    return `${format(
      viewStart,
      viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()
    )} - ${format(viewEnd, true)}`;
  }

  /**
   * The time formatting down the left hand side of the week view
   */
  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return momentHijri(date).locale(this.dateAdapter.getLocale()).format('ha');
  }

  /**
   * The time formatting down the left hand side of the day view
   */
  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return momentHijri(date).locale(this.dateAdapter.getLocale()).format('ha');
  }

  /**
   * The day view title
   */
  public dayViewTitle({ date, locale }: DateFormatterParams): string {
    if (this.dateAdapter.getcalendarType() === 'h') {
      return momentHijri(date)
        .locale(this.dateAdapter.getLocale())
        .format('idddd, LL'); // dddd = Thursday
    }
    return momentHijri(date)
      .locale(this.dateAdapter.getLocale())
      .format('dddd, LL'); // dddd = Thursday
  } // LL = locale-dependent Month Day, Year
}
