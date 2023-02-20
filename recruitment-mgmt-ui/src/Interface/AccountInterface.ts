// import { ProjectInterface } from "./ProjectInterface";

import { ProjectInterface } from "./ProjectInterface";

export interface AccountInterface {
  "selectedAccountId":string;
  "accountId": string;
  "id":string;
  "accountName": string;
  "accountDetails": string;
  "accountManager":string;
  "projectName":string[];
  "projects": ProjectInterface[]
}

