import moment from 'moment-hijri';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HijriAdapter {
  static localcode: string = 'en';
  static calendarTypecode: string = 'g';

  setLocale(localcode: string): void {
    HijriAdapter.localcode = localcode;
  }
  getLocale(): string {
    return HijriAdapter.localcode;
  }
  setcalendarType(calendarTypecode: string): void {
    HijriAdapter.calendarTypecode = calendarTypecode;
  }
  getcalendarType(): string {
    return HijriAdapter.calendarTypecode;
  }
  getTimezoneOffset(date: number | Date): number {
    return moment(date).locale(HijriAdapter.localcode).utcOffset();
  }
  addDays(date: Date | string | number, amount: number) {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'days')
      .toDate();
  }

  addHours(date: Date | string | number, amount: number) {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'hours')
      .toDate();
  }

  addMinutes(date: Date | string | number, amount: number) {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'minutes')
      .toDate();
  }

  addSeconds(date: Date | string | number, amount: number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'seconds')
      .toDate();
  }

  differenceInDays(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft)
      .locale(HijriAdapter.localcode)
      .diff(moment(dateRight), 'days');
  }

  differenceInMinutes(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft)
      .locale(HijriAdapter.localcode)
      .diff(moment(dateRight), 'minutes');
  }

  differenceInSeconds(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): number {
    return moment(dateLeft)
      .locale(HijriAdapter.localcode)
      .diff(moment(dateRight), 'seconds');
  }

  endOfDay(date: Date | string | number): Date {
    return moment(date).locale(HijriAdapter.localcode).endOf('day').toDate();
  }

  endOfMonth(date: Date | string | number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date)
        .locale(HijriAdapter.localcode)
        .endOf('iMonth')
        .toDate();
    }
    return moment(date).locale(HijriAdapter.localcode).endOf('month').toDate();
  }

  endOfWeek(date: Date | string | number): Date {
    return moment(date).locale(HijriAdapter.localcode).endOf('week').toDate();
  }

  getDay(date: Date | string | number): number {
    return moment(date).locale(HijriAdapter.localcode).day();
  }

  getMonth(date: Date | string | number): number {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date).locale(HijriAdapter.localcode).iMonth();
    }
    return moment(date).locale(HijriAdapter.localcode).month();
  }

  isSameDay(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    return moment(dateLeft)
      .locale(HijriAdapter.localcode)
      .isSame(moment(dateRight), 'day');
  }

  isSameMonth(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    if (HijriAdapter.calendarTypecode === 'h') {
      return (
        moment(dateLeft).locale(HijriAdapter.localcode).iMonth() ===
        moment(dateRight).iMonth()
      );
    }
    return (
      moment(dateLeft).locale(HijriAdapter.localcode).month() ===
      moment(dateRight).month()
    );
  }

  isSameSecond(
    dateLeft: Date | string | number,
    dateRight: Date | string | number
  ): boolean {
    return moment(dateLeft)
      .locale(HijriAdapter.localcode)
      .isSame(moment(dateRight), 'second');
  }

  max(dates: (Date | number)[]): Date {
    return moment
      .max(dates.map((date) => moment(date).locale(HijriAdapter.localcode)))
      .toDate();
  }

  setHours(date: Date | string | number, hours: number): Date {
    return moment(date).locale(HijriAdapter.localcode).hours(hours).toDate();
  }

  setMinutes(date: Date | string | number, minutes: number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .minutes(minutes)
      .toDate();
  }

  startOfDay(date: Date | string | number): Date {
    return moment(date).locale(HijriAdapter.localcode).startOf('day').toDate();
  }

  startOfMinute(date: Date | string | number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .startOf('minute')
      .toDate();
  }

  startOfMonth(date: Date | string | number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date)
        .locale(HijriAdapter.localcode)
        .startOf('iMonth')
        .toDate();
    }
    return moment(date)
      .locale(HijriAdapter.localcode)
      .startOf('month')
      .toDate();
  }

  startOfWeek(date: Date | string | number): Date {
    return moment(date).locale(HijriAdapter.localcode).startOf('week').toDate();
  }

  getHours(date: Date | string | number): number {
    return moment(date).locale(HijriAdapter.localcode).hours();
  }

  getMinutes(date: Date | string | number): number {
    return moment(date).locale(HijriAdapter.localcode).minutes();
  }

  addWeeks(date: Date | string | number, amount: number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'week')
      .toDate();
  }

  addMonths(date: Date | string | number, amount: number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date)
        .locale(HijriAdapter.localcode)
        .add(amount, 'iMonth')
        .toDate();
    }
    return moment(date)
      .locale(HijriAdapter.localcode)
      .add(amount, 'month')
      .toDate();
  }

  subDays(date: Date | string | number, amount: number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .subtract(amount, 'days')
      .toDate();
  }

  subWeeks(date: Date | string | number, amount: number): Date {
    return moment(date)
      .locale(HijriAdapter.localcode)
      .subtract(amount, 'week')
      .toDate();
  }

  subMonths(date: Date | string | number, amount: number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date)
        .locale(HijriAdapter.localcode)
        .subtract(amount, 'iMonth')
        .toDate();
    }
    return moment(date)
      .locale(HijriAdapter.localcode)
      .subtract(amount, 'month')
      .toDate();
  }

  getISOWeek(date: Date | string | number): number {
    return moment(date).locale(HijriAdapter.localcode).isoWeek();
  }

  setDate(date: Date | string | number, dayOfMonth: number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date)
        .locale(HijriAdapter.localcode)
        .iDate(dayOfMonth)
        .toDate();
    }
    return moment(date)
      .locale(HijriAdapter.localcode)
      .date(dayOfMonth)
      .toDate();
  }

  setMonth(date: Date | string | number, month: number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date).locale(HijriAdapter.localcode).iMonth(month).toDate();
    }
    return moment(date).locale(HijriAdapter.localcode).month(month).toDate();
  }

  setYear(date: Date | string | number, year: number): Date {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date).locale(HijriAdapter.localcode).iYear(year).toDate();
    }
    return moment(date).locale(HijriAdapter.localcode).year(year).toDate();
  }

  getDate(date: Date | string | number): number {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date).locale(HijriAdapter.localcode).iDate();
    }
    return moment(date).locale(HijriAdapter.localcode).date();
  }

  getYear(date: Date | string | number): number {
    if (HijriAdapter.calendarTypecode === 'h') {
      return moment(date).locale(HijriAdapter.localcode).iYear();
    }
    return moment(date).locale(HijriAdapter.localcode).year();
  }
}
