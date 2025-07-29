import { LightningElement } from 'lwc';
export default class helloWorld extends LightningElement {
        greeting = 'Kya haal hai!! ';
        greeting1  = 'Try New Context using new button!! ';
        text1 ='label value';
        text2 = 'Do what ever you want to do';
        text3 = 'Do what ever you want to do';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
        changeHandler1(event1) {
                this.greeting1 = event1.target.value;
        }
        
        handleClick(){
                this.greeting1 = 'Thanks for visiting!! ';
        }
}