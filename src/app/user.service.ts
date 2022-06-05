import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './types/user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // For demo purposes we just store the user here in the service
  // In a real world application you would make a request to the backend
  private user: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@mail.com',
  };

  fetchUser(): Observable<User> {
    return of(this.user);
  }

  updateUser(user: User): Observable<User> {
    this.user = { ...user };
    return of(this.user);
  }
}
