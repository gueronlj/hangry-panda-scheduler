import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Scheduler, View, Resource } from 'devextreme-react/scheduler';
import sendMessage from '../utilities/sendMessage'; 

const Schedule = () => {

   const handleTestText = () => {
      sendMessage()
   }

   const currentDate = new Date(2023, 9, 16)

   const schedulerData = [
      {
         text: 'Google AdWords Strategy',
         ownerId: [2],
         startDate: new Date("2016-01-01T09:00:00.000Z"),
         endDate: new Date("2016-01-01T10:30:00.000Z")
      }, 
      {
         text: 'New Brochures',
         ownerId: [1],
         startDate: new Date("2016-01-01T11:30:00.000Z"),
         endDate: new Date("2016-01-01T14:15:00.000Z")
      }
   ];

   const employees = [
      { text: 'Samantha Bright', id: 1, color: '#cb6bb2' },
      { text: 'John Heart', id: 2, color: '#56ca85' },
      { text: 'Gordon Ramsay', id: 2, color: '#56ca00' }
   ];

   const renderTimeCell = (data) => <i style='color: green'>{data.text}</i>;

   return(
      <div>
         <button onClick={handleTestText}>Send Test Text</button>
         <Scheduler
            timeZone="America/Los_Angeles"
            dataSource={schedulerData}
            defaultCurrentView="timelineMonth"
            defaultCurrentDate={currentDate}
            height={580}
            groups={employees}
            cellDuration={60}
            firstDayOfWeek={0}
            startDayHour={8}
            endDayHour={20}>
         </Scheduler>
        
      </div>
   )
}

export default Schedule;