import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
  communicationPartnerId: number,
  communicationPartnerTypeId: string,
  communicationPartnerTypePlaintext: string,  
  communicationPartnerValue: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get<UserResponse>('http://localhost:8080/communicationpartner/123').subscribe(
      data => {
        console.log("Id: " + data.communicationPartnerId);
        console.log("Type Id: " + data.communicationPartnerTypeId);
        console.log("TypePlain: " + data.communicationPartnerTypePlaintext);
        console.log("PartnerValue: " + data.communicationPartnerValue);
    },
    (err: HttpErrorResponse) => {
      if(err.error instanceof Error) {
        console.log("An clientside error occured")
      } else {
        console.log("An serverside error has occured");
      }
    }
  )
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000)
  }
  
}
