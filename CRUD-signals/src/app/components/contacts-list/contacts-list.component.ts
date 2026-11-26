import { Component, inject, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  contacts = signal<Contact[]>([]);

  http = inject(HttpClient);

  ngOnInit() {
    this.http.get<Contact[]>('/assets/contact.json').subscribe((data: Contact[]) => {
      this.contacts.set(data);
      console.log('Contacts loaded:', data);
    });
  }
}
