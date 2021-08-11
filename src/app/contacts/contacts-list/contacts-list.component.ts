import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactsServiceService } from 'src/app/Services/contacts-service.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  allUsers: any[] = [];
   message:string = '';
  // subscription: Subscription | any;
  constructor(private contactService:ContactsServiceService, private router:Router, private data: DataService) { }

  ngOnInit(): void {
    this.usersList();

    //  this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  //xcxcxcxcxcxc

  usersList() {
    this.contactService.getUsers().subscribe((res:any) => {
    
      this.allUsers = res;
      // this.data.changeMessage(this.allUsers[0]);
    });
  }

  getDetail(user:any){
    this.router.navigate([`contacts/${user.id}`]);
    // this.data.changeMessage(user);
  }

  

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
