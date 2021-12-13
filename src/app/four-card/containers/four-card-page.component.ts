import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromData from 'src/app/four-card/data';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-four-card-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="container grid place-content-center mt-20">
      <div class="text-center max-w-xl mx-auto">
        <div class="text-2xl tablet:text-3xl desktop:text-4xl">
          <h1 class="text-muted font-extralight">
            Railable, efficient delivery
          </h1>

          <h1 class="font-bold ">Powered by Technology</h1>
        </div>

        <p class="mt-4 text-muted">
          Our Artificial intelligence powred tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
    </header>

    <!-- features -->
    <main class="container mt-20 mb-28">
      <lbk-feature-card-grid
        [features]="features"
        class="block w-full"
      ></lbk-feature-card-grid>
    </main>
    <!-- end features -->
  `,
})
export class FourCardPageComponent {
  features: Feature[] = fromData.features;
}
