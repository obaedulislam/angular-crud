import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-crud';

  private user: User = {
    'id': 5,
    'name': 'Obaedul Islam',
    'username': 'obaed',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Mohammadpur',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onUpdateUser();
    this.onGetUsers();
    // this.onGetUser();
    this.onCreateUser();
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users'),
    );
  }
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user'),
    );
  }
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),
    );
  }
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (res) => console.log(res),
      (error: any) => console.log(error),
      () => console.log("Done updating user"),
    );
  }
}
