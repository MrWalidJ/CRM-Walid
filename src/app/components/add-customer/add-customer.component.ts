import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Interfaces/Customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private cs: CustomerService , private activeModal: NgbActiveModal) { }
  customer: Customer = { Fname: '', Lname: '', phone: '', email: '',address:'',notes:'' };
  ngOnInit(): void {}
  onSubmit() {
  
    this.cs.addCustomer(this.customer).then(() => {
      alert('Customer successfully added');
      this.reset();
    }).catch((err)=> console.log(err));
    this.activeModal.close();
  
  }

  reset(): void {
    this.customer = { Fname: '', Lname: '', phone: '', email: '',address:'',notes:'' };
  }
  
}
