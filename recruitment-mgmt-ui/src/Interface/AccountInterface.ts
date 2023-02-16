export interface AccountInterface {
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