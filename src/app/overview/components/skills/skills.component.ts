import { Component } from '@angular/core';

@Component({
  selector: 'ludan-skills',
  styleUrls: ['./skills.component.scss'],
  template: `
    <section class="skills" fxLayout="row wrap">
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3 class="skills__title">Front-end developer</h3>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life in the
          browser.
        </p>

        <h4 class="skills__subtitle">Favorite development tech stack:</h4>
        <p>Angular 8, React, Redux, RxJS, D3.js, Sass</p>

        <h4 class="skills__subtitle">Favorite testing tech stack</h4>
        <p>Jasmine, Jest, Storybook, BackstopJS</p>
      </div>
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3 class="skills__title">Back-end developer</h3>
        <p>
          In order to be able to build things from the ground up it's essential to master
          both sides of development.
        </p>

        <h4 class="skills__subtitle">Favorite tech stack</h4>
        <p>Node.js, Express, MongoDB, socket.io, FeatherJS</p>
      </div>
      <div class="skills__section" fxFlex="33.33%" fxFlex.lt-md="100%">
        <h3 class="skills__title">DevOps</h3>
        <p>
          I have extensive experience of setting up CI/CD pipelines to run linters, UI
          tests, E2E tests and UI regression tests.
        </p>

        <h4 class="skills__subtitle">Favorite tech stack</h4>
        <p>Docker, Codeship, Quay.io, Firebase.</p>
      </div>
    </section>
  `
})
export class SkillsComponent {}
