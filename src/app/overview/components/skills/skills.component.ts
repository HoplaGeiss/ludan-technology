import { Component } from '@angular/core';

@Component({
  selector: 'ludan-skills',
  styleUrls: ['./skills.component.scss'],
  template: `
    <section class="skills" fxLayout="row wrap">
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3>Front-end developer</h3>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life in the
          browser.
        </p>

        <h4>Favorite development tech stack:</h4>
        <p>Angular 8, Redux, rxjs, D3.js, Sass</p>

        <h4>Favorite testing tech stack</h4>
        <p>Jasmine, Storybook, BackstopJS</p>
      </div>
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3>Back-end developer</h3>
        <p>
          In order to be able to build things from the ground up it's essential to master
          both sides of development.
        </p>

        <h4>Favorite tech stack</h4>
        <p>Node.js, Express, MongoDB, socket.io</p>
      </div>
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3>DevOps</h3>
        <p>
          Over the years, I gained extensive experience of setting up CI/CD pipelines.
          Ensuring the linters, the UI tests, the end to end tests and the UI regression
          tests run smoothly in the background.
        </p>

        <h4>Favorite tech stack</h4>
        <p>Docker, Codeship, Quay.io, Firebase.</p>
      </div>
    </section>
  `
})
export class SkillsComponent {}
