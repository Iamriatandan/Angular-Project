import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz";
  }

  onClick($event: Event):void{
    console.log("Save button is clicked!",$event);
    window.open(this.url, "_blank");
  }
}
