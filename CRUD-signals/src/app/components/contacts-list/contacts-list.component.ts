import { Component, inject, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule,MatListModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  contacts = signal<Contact[]>([]);

  service = inject(ApiService);

  ngOnInit() {
    this.service.getContacts().subscribe((data: Contact[]) => {
      this.contacts.set(data);
      console.log('Contacts loaded:', data);
    });
  }
}
