import React from "react";
import {Calendar,momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment';



moment.locale('en-GB');
const localizer=momentLocalizer(moment);
const InterviewTable:React.FunctionComponent=()=>{
  return(
    <>
<Calendar
 startAccessor="start"
 endAccessor="end"
selectable
localizer={localizer}
defaultDate={new Date()}

/>
    </>
  )
}
export default InterviewTable