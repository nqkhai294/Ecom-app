import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {
    // Initialize login object if needed
  }

  onLogin() {
    if (this.loginObj.email == 'admin' && this.loginObj.password == 'admin') {
      // Simulate successful login
      console.log('Login successful');
      this.router.navigate(['/products']);
    } else {
      alert('Wrong Credentials');
    }
  }
}
