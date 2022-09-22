import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/Interfaces/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = { Fname: '', Lname: '', phone: '', email: '',address:'',notes:'' };
    constructor(private cs:CustomerService , private activeModal: NgbActiveModal) { }
  
    ngOnInit(): void {
  if(this.id){
    this.cs.getCustomerById(this.id).subscribe((custData:Customer)=>{
      this.customer = custData ;
    })
  }
    }
    closeModal(){
      this.activeModal.close();
    }
}
