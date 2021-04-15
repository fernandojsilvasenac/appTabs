import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userId: string;
  userName: string;

  constructor(
    private afa: AngularFireAuth) { }

  ngOnInit() {
    this.afa.authState.subscribe(user => {
      this.userId = user.uid;
      this.userName = user.displayName;
      // console.log(this.userid);
      // console.log(this.username)
    })
  }

}
