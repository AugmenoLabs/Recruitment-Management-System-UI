import { Dayjs } from "dayjs";

export interface InterviewInterface {
    title: string;
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
    // candidateId: string;
  }