import { Component } from '@angular/core';

@Component({
  selector: 'ludan-skills',
  styleUrls: ['./skills.component.scss'],
  template: `
    <section class="skills">
      <div class="section">
        <h3 class="title">Front-end developer</h3>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life in the
          browser.
        </p>

        <h4 class="subtitle">Favorite development tech stack:</h4>
        <p>Angular 8, React, Redux, RxJS, D3.js, Sass</p>

        <h4 class="subtitle">Favorite testing tech stack</h4>
        <p>Jasmine, Jest, Storybook, BackstopJS</p>
      </div>
      <div class="section">
        <h3 class="title">Back-end developer</h3>
        <p>
          In order to be able to build things from the ground up it's essential to master
          both sides of development.
        </p>

        <h4 class="subtitle">Favorite tech stack</h4>
        <p>Node.js, Express, MongoDB, socket.io, FeatherJS</p>
      </div>
      <div class="section">
        <h3 class="title">DevOps</h3>
        <p>
          I have extensive experience of setting up CI/CD pipelines to run linters, UI
          tests, E2E tests and UI regression tests.
        </p>

        <h4 class="subtitle">Favorite tech stack</h4>
        <p>Docker, Codeship, Quay.io, Firebase.</p>
      </div>
    </section>
  `
})
export class SkillsComponent {}
