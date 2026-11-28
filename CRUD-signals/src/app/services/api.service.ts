import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
    http = inject(HttpClient);
    
    getContacts() {
        return this.http.get<Contact[]>('/assets/contact.json');
    }
}