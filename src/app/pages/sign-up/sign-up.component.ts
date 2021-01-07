import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
              private router: Router,
              private toastr: ToastrService,
              private auth: AuthService) {


  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
      const {email, password} = f.form.value;
      this.auth.signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/sign-in');
        this.toastr.success("Signup Successfully!");
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error("Signup Failed");
      })
  }

}
