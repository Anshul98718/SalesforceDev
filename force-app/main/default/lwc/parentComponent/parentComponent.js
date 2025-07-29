import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    parentMessage = 'Message from Parent!';

    handleChange(event) {
        this.parentMessage = event.target.value;
    }
}
