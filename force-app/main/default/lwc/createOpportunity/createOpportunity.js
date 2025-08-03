import { LightningElement } from 'lwc';
import Opportunity_OBJECT from "@salesforce/schema/Opportunity";
import NAME_FIELD from "@salesforce/schema/Opportunity.Name";
import ACCOUNTID_FIELD from "@salesforce/schema/Opportunity.AccountId";
import AMOUNT_FIELD from "@salesforce/schema/Opportunity.Amount";
import OWNERID_FIELD from "@salesforce/schema/Opportunity.OwnerId";
import CLOSEDATE_FIELD from "@salesforce/schema/Opportunity.CloseDate";
import STAGENAME_FIELD from "@salesforce/schema/Opportunity.StageName";


export default class CreateOpportunity extends LightningElement {

    OpportunityObject = Opportunity_OBJECT;
    myFields = [NAME_FIELD, ACCOUNTID_FIELD, AMOUNT_FIELD, OWNERID_FIELD, STAGENAME_FIELD, CLOSEDATE_FIELD];

    handleOpportunityCreated() {


    }
}