import { LightningElement, track } from 'lwc';

export default class ToggleForm extends LightningElement {
    @track showForm = false;
    @track name = '';
    @track email = '';

    handleToggle(event) {
        this.showForm = event.target.checked;
    }

    handleInputChange(event) {
        const field = event.target.label.toLowerCase();
        if (field === 'name') {
            this.name = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        }
    }
}
