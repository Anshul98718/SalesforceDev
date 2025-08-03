import { LightningElement } from 'lwc';
export default class helloWorld extends LightningElement {
        greeting = 'whatsup!! ';
        greeting1  = 'Try New Context using new button!! ';
        text1 ='How iss ur Day';
        text2 = 'Do what ever you want to do';
        text3 = 'Do what ever you want to do';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
        
        
        handleClick(){
                this.greeting1 = 'Thanks for visiting!! ';
        }
}