import { LightningElement, wire, track } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import GENDER_IDENTITY_FIELD from '@salesforce/schema/Contact.GenderIdentity';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class AddMultipleComponent extends LightningElement {
    @track contacts = [];

    @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
    contactObjectInfo;

    @wire(getPicklistValues, { 
        recordTypeId: '$contactObjectInfo.data.defaultRecordTypeId', 
        fieldApiName: GENDER_IDENTITY_FIELD
    })
    getpicklistValues;

    get getGenderpicklistValues() {
        return this.getpicklistValues?.data?.values || [];
    }

    addNewClick() {
        const newContact = {
            tempId: Date.now(),
            FirstName: '',
            LastName: '',
            Email: '',
            Gender: ''
        };
        this.contacts = [...this.contacts, newContact];
    }

    handleInputChange(event) {
        const field = event.target.label || event.target.placeholder;
        const value = event.target.value;
        const tempId = event.target.dataset.id;

        this.contacts = this.contacts.map(contact => {
            if (contact.tempId.toString() === tempId) {
                if (field === 'Enter First Name') {
                    contact.FirstName = value;
                } else if (field === 'Enter Last Name') {
                    contact.LastName = value;
                } else if (field === 'Enter Email') {
                    contact.Email = value;
                } else if (field === 'Select Gender') {
                    contact.Gender = value;
                }
            }
            return contact;
        });
    }

        connectedCallback() {
        this.addNewClick();
    }

    deleteRowClick(event) {
        const tempId = event.target.dataset.id;
        this.contacts = this.contacts.filter(contact => contact.tempId.toString() !== tempId);
    }

    handleSubmit() {
        console.log('Submitted Contacts:', JSON.stringify(this.contacts));
    }
}
