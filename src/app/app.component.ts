import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nb-layout>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <span>
          Developed by

          <a href="https://github.com/leduardo99" target="_blank">
            Luís Eduardo
          </a>
        </span>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class AppComponent {}
