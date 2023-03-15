import { Dayjs } from "dayjs";

export interface InterviewInterface {
    title: string;
    name:string;
    interviewerName: string;
    interviewerEmail: string;
     cceMail: string;
     bcceMail: string;
     round: string;
     scheduledTimeFrom: Dayjs;
     scheduledTimeTo: Dayjs;
     modeOfInterview: string;
     contactNumber: number;
     meetingLink: string;
     details: string;
     experience:string;
     position:string;
     account:string;
     project:string;
     candidateId:string;
     id:string;
    // candidateId: string;
  }