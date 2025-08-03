import { LightningElement } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import WEBSITE_FIELD from "@salesforce/schema/Account.Website";
import OWNER_ID_FIELD from "@salesforce/schema/Account.OwnerId";
import CREATED_DATE_FIELD from "@salesforce/schema/Account.CreatedDate";
import Phone_FIELD from "@salesforce/schema/Account.Phone";



export default class AccountCreator extends LightningElement {
  accountObject = ACCOUNT_OBJECT;
  myFields = [NAME_FIELD, OWNER_ID_FIELD, Phone_FIELD,WEBSITE_FIELD, CREATED_DATE_FIELD];
  handleAccountCreated() {
  }


}