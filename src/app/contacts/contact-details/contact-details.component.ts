import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactsServiceService } from 'src/app/Services/contacts-service.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  userID: number = 0;
  userDetail: any = {};



  constructor(private ac: ActivatedRoute, private contactService: ContactsServiceService, private data: DataService) {
   


   }

  ngOnInit(): void {
    
    this.ac.params.subscribe(data => {
      this.userID = data.id;
      
      if (this.userID) {
        this.getUserDetail(this.userID);
      } else {
        this.getUserDetail(1);
      }

    });

 


  }

  getUserDetail(id:number) {
    this.contactService.getUsersDetails(id).subscribe(res => {
      
      this.userDetail = res;
    });
 
  }



}
