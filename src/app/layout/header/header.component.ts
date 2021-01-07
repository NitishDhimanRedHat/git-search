import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router){
        
      this.authService.getUser().subscribe((user) => {
        this.email = user?.email
      })

  }

  ngOnInit(): void {
  }

  async handleSignout() {
    try {
      const res = this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("Login again to continue!");
      this.email = null;
    } catch (error) {
      this.toastr.error("Something is wrong.");
    }
  }

}
