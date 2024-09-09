import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'fullcalendar-app';
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'event 1', date: '2024-09-01' },
      { title: 'event 2', date: '2024-09-02' },
      { title: 'Reminder 1', date: '2024-09-12' },
      { title: 'Meeting', date: '2024-10-02' },
      { title: 'Grower', date: '2024-11-22' }
    ]
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
}
