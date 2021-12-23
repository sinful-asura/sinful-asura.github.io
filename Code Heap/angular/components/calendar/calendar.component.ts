import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ReservationSteps } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() startFromDate: number | null = null;
  @Output() ondayselect = new EventEmitter<number>();
  public selectedDate = {
    day: -1,
    month: "",
    year: -1,
    unix: -1
  }
  public readonly DAY_TO_UTC_MULTIPLIER = 24 /*Hours*/ * 3600 /*Seconds*/ * 1000 /*Milliseconds*/;
  public readonly YEAR_TO_UTC_MULTIPLIER = this.DAY_TO_UTC_MULTIPLIER * 365.25;
  public showFooter: boolean = true;
  public displaySection: 'days' | 'months' | 'years' = 'days';
  public currDate = {
    day: -1,
    month: "",
    year: -1,
    unix: -1
  }
  public today: Date = new Date();
  public selectMode: "day" | "year" | "month" = "day";
  public days: string[] = [];
  public generatedMonthlyDays: Array<Array<number>> = [
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  public enum_month_names: Array<String> = [];
  public year_selection_pool: Array<number> = [];
  constructor(
    private reservation: ReservationService
  ) { 
    for(let i = 0; i< 7; i++){
      this.days.push(Day[i]);
    }

    for(let i = 0; i < 12; i++){
      this.enum_month_names.push(Month[i]);
    }
  }

  ngOnInit(): void {
    this.today.setHours(0,0,0,0);
    const date = (this.startFromDate) ? new Date(this.startFromDate) :  new Date();
    if(this.startFromDate){
      this.selectDay(+date, false);
    }
    
    this._serializeDate(date);
    this.generatedMonthlyDays = this._generateMonth(date);

    this.original_date = {...this.currDate};


    for(let i = 0; i<7; i++){
      const current_generated_year =(+date) + (-(7-i) * this.YEAR_TO_UTC_MULTIPLIER);
      this.year_selection_pool.push(new Date(current_generated_year).getFullYear());
    }
    this.year_selection_pool.push(+date.getFullYear());
    
    for(let i = 0; i<7; i++){
      const current_generated_year =(+date) + ((i+1) * this.YEAR_TO_UTC_MULTIPLIER);
      this.year_selection_pool.push(new Date(current_generated_year).getFullYear());
    }
    
    
  }

  /**
   * Sets value of currDate to the passed date.
   * Normalization can be disabled by passing the false parameter.
   * @param date 
   * @param normalized 
   */
  private _serializeDate(date: Date, normalized: boolean = true){
    if(normalized){
      date.setHours(0,0,0,0);
    }
    
    this.currDate.year = date.getFullYear();
    this.currDate.month = Month[+date.getMonth()];
    this.currDate.day = +date.getDate();
    this.currDate.unix = +date;
  }

  /**
   * Monday is always the first day
   * @param currDate - Normalzied date (normalized means time is set at 00:00:00:000 of that day)
   */
  private _generateMonth(currDate: Date): Array<Array<number>>{
     
    const count = currDate.getDate();
    const day_pool = [];
    const first_day_offset = new Date(+currDate - (count * this.DAY_TO_UTC_MULTIPLIER)).getDay() ?? 0;
    
    for(let i = (count + (first_day_offset-1)); i>0; i--){
      day_pool.push(+currDate + (-i * this.DAY_TO_UTC_MULTIPLIER));
    }

    for(let i = 0; i <= 31-count; i++){
      day_pool.push(+currDate + ((i) * this.DAY_TO_UTC_MULTIPLIER));
    }

    
    const left_to_add = (day_pool?.length % 7) ? 7 - (day_pool?.length % 7) : 0;
    for(let i = 0; i< left_to_add; i++){
      day_pool.push(+currDate + ((i+32-count)* this.DAY_TO_UTC_MULTIPLIER));
    }
    

    const new_monthly_days: Array<Array<number>> = [
      [], // First week
      [], // Second week
      [], // Third week
      [], // Fourth week
      [], // Fifth week
      [] // Sometimes sixth row appears
    ];

    for(let i = 0; i < 6; i++){
      for(let j = 0; j < 7; j++){
        if(day_pool[(i*7) + j] === undefined){
          continue;
        }
        new_monthly_days[i].push(day_pool[(i*7) + j])
      }
    }

    for(let i = 0; i < 6; i++){
      if(new_monthly_days[new_monthly_days?.length - 1]?.length == 0){
        new_monthly_days.pop();
      } else{
        break;
      }
    }

    return new_monthly_days;
  }

  disableDay(day: number, index: number): true | false{
    if(+day === this.selectedDate.unix){
      return false;
    }
    if(day < +this.today){
      return true;
    }
    const first = new Date(day); 
    if(index == 0){
      if(first.getDate() <=31 && first.getDate() >= 25){
        return true;
      }
    } else{
      if(index == (this.generatedMonthlyDays?.length - 1)){
        if(first.getDate() <=7){
          return true;
        }
      }
    }
    return false;
  }

  selectDay(day: number, triggered_by_click: boolean = true){
    const dt_curr = new Date(day);
    this._serializeDate(dt_curr);
    this.selectedDate = {
      day: dt_curr.getDate(),
      year: dt_curr.getFullYear(),
      month: Month[dt_curr.getDay()],
      unix: +dt_curr
    }
    this.ondayselect.emit(day);
    if(triggered_by_click){
      this.reservation.current_step = ReservationSteps.Start;
    }
  }

  original_date: {day: number, month: string, year: number, unix: number} | null = null;

  loadMonth(direction: 'next' | 'prev'){
    if(this.displaySection!=='days'){
      return;
    }
    const newDate = new Date(this.currDate.unix);
    if(direction === 'next'){
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    this._serializeDate(newDate);
    this.generatedMonthlyDays = this._generateMonth(newDate);
  }

  changeMonth(month: number){
    const newDate = new Date(this.currDate.unix);
    newDate.setMonth(month);
    this._serializeDate(newDate);
    this.generatedMonthlyDays = this._generateMonth(newDate);
    this.displaySection = 'days';
  }

  changeYear(year: number){
    const newDate = new Date(this.currDate.unix);
    newDate.setFullYear(year);
    this._serializeDate(newDate);
    this.generatedMonthlyDays = this._generateMonth(newDate);
    this.displaySection = 'days';
  }

  //END CLASS
}

enum Day{
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}