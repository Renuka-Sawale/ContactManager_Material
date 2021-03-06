import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _users:BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) { 
    this.dataStore = { users: [] }; //Initial datastore 
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable(); 
  }

  userById(id:number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users'

    return this.http.get<User[]>(usersUrl)
    .subscribe( data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users ) //Copying old data to new
    }, error => {
      console.log("failed to fetch users");
    });
  }
}
