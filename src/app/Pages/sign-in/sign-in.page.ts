import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../Service/auth.service';
import {AlertService} from '../../Service/alert.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form: FormGroup;
  submitted = false;
  loading = false;


  constructor(private authService: AuthService,
              private router: Router,
              private alert: AlertService,
              private fb: FormBuilder,
              private alertController: AlertController
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() {
    return this.form.controls;
  }

  async login() {
    this.submitted = true;
    const val = this.form.value;
    if (val.email && val.password) {
      this.loading = true;
      const resultConnection = await this.authService.login(this.form.value, (err) => {
        if (err) {
          this.presentAlert(err);
        }
      }).then();
    }
  }

  ngOnInit() {
  }

  movetosignup() {
    this.router.navigate([]);
  }

  async presentAlert(arg) {
    const alert = await this.alertController.create({
      header: 'Un problème est survenue..',
      message: arg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
