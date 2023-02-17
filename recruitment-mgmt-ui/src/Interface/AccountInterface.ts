// import { ProjectInterface } from "./ProjectInterface";

export interface AccountInterface {
  "selectedAccountId":string;
  "accountId": string;
  "id":string;
  "accountName": string;
  "accountDetails": string;
  "accountManager":string;
  "projects": [
    {
      "projectId": string;
      "projectName": string;
      "projectDetails": string;
      "projectManager": string;
    }
  ]
}