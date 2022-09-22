import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/Interfaces/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customerinfo',
  templateUrl: './edit-customerinfo.component.html',
  styleUrls: ['./edit-customerinfo.component.css']
})
export class EditCustomerinfoComponent implements OnInit {
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
  

  updateCustomer():void{
    this.cs.updateCustomer(this.customer).then(()=>{
        
alert("Book updated successfully");

}).catch((err)=> console.log(err));
this.activeModal.close();
    }
  }

