import { LightningElement } from 'lwc';
export default class helloWorld extends LightningElement {
        greeting = 'Kya haal hai!! ';
        text1 ='label value';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}