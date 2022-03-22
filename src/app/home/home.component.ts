import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {interval, Subscription} from 'rxjs';

import { AuthService } from '../auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()  => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater then 3'));
        }
        count++;
      }, 1000);
    });
    this.firstSubscription = customObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('completed');
    });
  }
  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
