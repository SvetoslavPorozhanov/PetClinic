import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isReady$ = this.authService.isReady$;

  constructor(private authService: AuthService, private http: HttpClient) {

  }
}
