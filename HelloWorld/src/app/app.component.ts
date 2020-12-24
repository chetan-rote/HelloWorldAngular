import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "HelloWorld";
  imgUrl ="../assets/BridgeLabz Logo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = ""; 
  nameError: string = "";

  /* UC1 One Way Data Binding */
  ngOnInit(): void{
  this.title = 'Hello from BridgeLabz';
  }

  /* UC3 Launch BridgeLabz site in a new tab on clicking Bridgelabz logo */
  onClick($event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  /* UC5 User Name Validation and show erroe if wrong user name input.*/
  onInput($event){
    console.log("Change Event Occurred", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
