import React, { useState } from 'react';
import 'devextreme/dist/css/dx.material.blue.light.css';
import { Scheduler } from 'devextreme-react/scheduler';
import sendMessage from '../utilities/sendMessage'; 
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { writeToDB, deleteFromDB, updateDB } from '../utilities/db';

/*__________________TO DO START____________________ */
const serviceUrl = 'https://mydomain.com/MyDataService';

const remoteData = createStore({
   key: 'ID',
   loadUrl: serviceUrl + '/GetAction',
   insertUrl: serviceUrl + '/InsertAction',
   updateUrl: serviceUrl + '/UpdateAction',
   deleteUrl: serviceUrl + '/DeleteAction'
});

let schedulerData = [
      {
         text: 'Google AdWords Strategy',
         ownerId: [2],
         startDate: new Date("2023-10-10T09:00:00.000Z"),
         endDate: new Date("2023-10-10T23:30:00.000Z")
      },
      {
         text: 'New Brochures',
         ownerId: [1],
         startDate: new Date("2023-10-10T11:30:00.000Z"),
         endDate: new Date("2023-10-10T22:15:00.000Z")
      }
   ];
/*__________________TO DO END____________________ */

const Schedule = () => {

   const handleTestText = () => {
      sendMessage()
      console.log('btn clicked');
   }

   const handleAppointmentAdded = ( newData ) => {
      console.log('Appointment added');
      writeToDB(newData.appointmentData);
   }

   const handleAppointmentDeleted = (removedData) => {
      console.log(('Appointment deleted'));
     deleteFromDB(removedData.appointmentData);
   }

   const handleAppointmentUpdated = (data) => {
      console.log('Appointment updated');
      updateDB(data.appointmentData)
   }

   const currentDate = new Date()

   const employees = [
      { text: 'Samantha Bright', id: 1, color: '#cb6bb2' },
      { text: 'John Heart', id: 2, color: '#56ca85' },
      { text: 'Gordon Ramsay', id: 3, color: '#26ca00' }
   ];

   return(
      <div>
         <Scheduler
            remoteFiltering:false
            timeZone="America/New_York"
            dataSource={schedulerData}
            defaultCurrentView="week"
            defaultCurrentDate={currentDate}
            height={580}
            groups={employees}
            cellDuration={120}
            firstDayOfWeek={0}
            startDayHour={6}
            endDayHour={26}
            showAllDayPanel={false}
            onAppointmentAdded = {handleAppointmentAdded}
            onAppointmentAdding:null
            onAppointmentClick:null
            onAppointmentContextMenu:null
            onAppointmentDblClick:null
            onAppointmentDeleted = {handleAppointmentDeleted}
            onAppointmentDeleting = {() => {console.log('deleting appointment');}}
            onAppointmentFormOpening:null
            onAppointmentRendered = {() => {console.log('appointment rendered');}}
            onAppointmentTooltipShowing:null
            onAppointmentUpdated = {handleAppointmentUpdated}
            onAppointmentUpdating = {() => {console.log('updating appointment');}}
            onCellClick = {() => {console.log('cell clicked');}}
            onCellContextMenu = {() => {console.log('cell context menu opened');}}
            onInitialized:null
            onOptionChanged:null
            showCurrentTimeIndicator:true
            useDropDownViewSwitcher={false}>

         </Scheduler>     
      </div>
   )
}

export default Schedule;
