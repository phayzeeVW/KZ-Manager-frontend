import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {

  }

  setLanguage(language: string) {
    console.log(language)
    if (language === 'en') {
      this.translateService.use('en');
    } else if (language === 'ro') {
      this.translateService.use('ro');
    }
  }
}
