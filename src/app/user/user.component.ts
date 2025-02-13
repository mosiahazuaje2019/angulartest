import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="w-full overflow-x-auto">
      <input
        type="text"
        class="w-full p-2 mb-4 border rounded-lg"
        placeholder="Search users by name..."
        [formControl]="searchControl"
      />

      <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of filteredUsers" class="border-b hover:bg-gray-100">
            <td class="py-3 px-6">{{ user.name }}</td>
            <td class="py-3 px-6">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  private userService = inject(UserService);
  users: any[] = [];
  filteredUsers: any[] = [];

  searchControl = new FormControl('');

  constructor() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      const searchValue = (value || '').toLowerCase();
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(searchValue)
      );
    });
  }
}
