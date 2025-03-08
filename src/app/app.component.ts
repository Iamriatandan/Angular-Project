import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG";
  url = "https://www.bridgelabz.com";
  userName = "";
  errorMsg = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz";
  }

  onInput($event: Event): void { 
    console.log("Text has Entered.", $event)
    const userNameRegix = RegExp('^[A-Z]{1}[a-zA-Z]{3,}$');
    if (userNameRegix.test(this.userName)) {
      this.errorMsg = "";
      return;
    }
    this.errorMsg = "Please enter a valid username";
  }

  onClick($event: Event):void{
    console.log("Save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
}
