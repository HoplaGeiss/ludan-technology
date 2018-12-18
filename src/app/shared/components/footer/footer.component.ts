import { Component } from '@angular/core';

@Component({
  selector: 'ludan-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="footer">
      <div class="call-to-action">
        <div class="text">Contact me</div>
        <div class="text-hover">Drop me a line at gabriel@ludan.io</div>
      </div>
      <div class="bottom-row">
        <div class="copyright">Ludan Technology Ltd.</div>
        <div class="socials">
          <a href="https://github.com/HoplaGeiss" target="_blank"
            ><img src="./assets/icons/github.svg" alt="Github"
          /></a>
          <a href="https://www.linkedin.com/in/mullergab" target="_blank"
            ><img src="./assets/icons/linkedin.svg" alt="linkedin"
          /></a>
        </div>
      </div>
    </div>
  `
})
export class FooterComponent {}
