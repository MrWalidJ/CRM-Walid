import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, DocumentReference, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../Interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  custRef = collection(this.firestore , 'customers');

  constructor(private firestore:Firestore) { }

  addCustomer(customer:Customer):Promise<DocumentReference<Customer>>{
    return addDoc(this.custRef,customer) as Promise<DocumentReference<Customer>> ; 
  }

  getCustomer(): Observable<Customer[]>{
    return collectionData(this.custRef, {idField : "id"}) as Observable <Customer[]> ; 
    }

 deleteCustomer(cust:Customer): Promise<void>{
      const cusRef = doc(this.firestore,`customers/${cust.id}`)
    return deleteDoc(cusRef) as Promise <void>;
     }

  updateCustomer(cust:Customer): Promise<void> {
      const cusRef = doc(this.firestore, `customers/${cust.id}`); 
      return setDoc(cusRef, cust) as Promise<void>;
    }    

  getCustomerById(id:string){
      const cusRef = doc(this.firestore, `customers/${id}`);
      return docData(cusRef ,{idField : "id"} ) as  Observable <Customer> ;  
    }


     

}

