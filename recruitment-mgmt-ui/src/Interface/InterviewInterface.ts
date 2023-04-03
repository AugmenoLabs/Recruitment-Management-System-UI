import { Dayjs } from "dayjs";

export interface InterviewInterface {
    title: string;
    email:string;
    candidateName:string;
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
     yearOfExperience:number;
     id:string;
    // candidateId: string;
  }
  

  