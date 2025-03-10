import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router ,
    private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkLoggedInObs(null)
    this.router.navigate(['login']);
  }

}
