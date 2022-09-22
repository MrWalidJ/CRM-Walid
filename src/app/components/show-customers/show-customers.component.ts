import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/Interfaces/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustDetailsComponent } from '../cust-details/cust-details.component';
import { EditCustomerinfoComponent } from '../edit-customerinfo/edit-customerinfo.component';


@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
customers: Customer[] =[];
  custFname: string ='';
  custLname: string ='';
  custPhone: string ='';
  constructor(private cs:CustomerService , private modal:NgbModal) { }

  ngOnInit(): void {
    this.cs.getCustomer().subscribe((cust_data:Customer[]) => {
      this.customers = cust_data ;
    });
}

deleteCustomer(cust:Customer): void {
  if(confirm("Are you sure?")){
    this.cs.deleteCustomer(cust).then(()=>
      alert("Customer deleted successfully")).catch((err)=>console.log(err));
    }
  }

  showCard(cust:Customer):void{
  
    const modalRef = this.modal.open(CustDetailsComponent , {
      size:"lg" , 
      centered: true ,
      windowClass: 'dark-modal' // dark around
      })
    
       
        modalRef.componentInstance.id = cust.id ;
      }

addNewCustomer():void{
  const modalRef = this.modal.open(AddCustomerComponent , {
    size:"lg" , 
    centered: true ,
    windowClass: 'dark-modal' // dark around
    })
  
   }


updateCustomer(cust:Customer):void{
  
const modalRef = this.modal.open(EditCustomerinfoComponent , {
  size:"lg" , 
  centered: true ,
  windowClass: 'dark-modal' // dark around
  })

   
    modalRef.componentInstance.id = cust.id ;
  }


}

