import React, { useState } from 'react';
import 'devextreme/dist/css/dx.material.blue.dark.css';
import { Scheduler, View, Resource } from 'devextreme-react/scheduler';
import sendMessage from '../utilities/sendMessage'; 
import { createStore } from 'devextreme-aspnet-data-nojquery';

/*__________________TO DO START____________________ */
const serviceUrl = 'https://mydomain.com/MyDataService';

const remoteData = createStore({
   key: 'ID',
   loadUrl: serviceUrl + '/GetAction',
   insertUrl: serviceUrl + '/InsertAction',
   updateUrl: serviceUrl + '/UpdateAction',
   deleteUrl: serviceUrl + '/DeleteAction'
});

const schedulerData = [
      {
         text: 'Google AdWords Strategy',
         ownerId: [2],
         startDate: new Date("2023-01-10T09:00:00.000Z"),
         endDate: new Date("2023-01-10T10:30:00.000Z")
      },
      {
         text: 'New Brochures',
         ownerId: [1],
         startDate: new Date("2023-01-10T11:30:00.000Z"),
         endDate: new Date("2023-01-10T14:15:00.000Z")
      }
   ];
/*__________________TO DO END____________________ */

const Schedule = () => {

   const [tempData, setTempData] = useState(schedulerData)

   const handleTestText = () => {
      sendMessage()
   }

   const handleAppointmentAdded = (stuff) => {
      setTempData({ ...tempData, text:'this is a test'})
   }

   const currentDate = new Date(2023, 9, 16)

   const employees = [
      { text: 'Samantha Bright', id: 1, color: '#cb6bb2' },
      { text: 'John Heart', id: 2, color: '#56ca85' },
      { text: 'Gordon Ramsay', id: 3, color: '#26ca00' }
   ];

   const renderTimeCell = () => {
      console.log('rendering time cell');
      return <div>testing</div>
   };

   return(
      <div>
         <h3>{tempData.text}</h3> <h3>{tempData[0].ownerId}</h3>
         <button onClick={handleTestText}>Send Text</button>
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
            onAppointmentAdded={handleAppointmentAdded}
            onAppointmentAdding:null
            onAppointmentClick:null
            onAppointmentContextMenu:null
            onAppointmentDblClick:null
            onAppointmentDeleted= {() => {console.log('appointment deleted');}}
            onAppointmentDeleting = {() => {console.log('deleting appoitment');}}
            onAppointmentFormOpening:null
            onAppointmentRendered = {() => {console.log('appoitment rendered');}}
            onAppointmentTooltipShowing:null
            onAppointmentUpdated:null
            onAppointmentUpdating:null
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
