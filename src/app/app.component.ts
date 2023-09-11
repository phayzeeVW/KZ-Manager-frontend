import {Component, OnInit} from '@angular/core';
import {ElectronService} from './core/services';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private electronService: ElectronService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  minimize(): void {
    this.electronService.ipcRenderer.send('minimize');
  }

  maximize(): void {
    this.electronService.ipcRenderer.send('maximize');
  }

  close(): void {
    this.electronService.ipcRenderer.send('close');
  }
}
