import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';


@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  standalone: true,
  imports: [FullCalendarModule],
})
export class FullCalendarSampleComponent {
  private readonly COLORS = [
    'red',
    'black',
    'orange',
    'blue',
    'cyan'
  ];
  definition: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek',
    },
    businessHours: true, // display business hours
    editable: true,
    dayMaxEvents: true,
    selectable: true,
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Conference',
        start: new Date(),
        end: '2024-02-20'
      },
    ],
    select: (arg: DateSelectArg) => arg.view.calendar.addEvent(
      {
        start: arg.start,
        end: new Date(arg.end.getTime() + Math.floor(Math.random() * 10) * 60000),
        allDay: true,
        title: `test event ${Math.floor(Math.random() * 10)}`,
        backgroundColor: this.COLORS[Math.floor(Math.random() * 6)],
        textColor: 'white',
        eventDurationEditable: true,
      },
    ),
    eventClick: (clickInfo: EventClickArg) => {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
      }
    }
  };
}