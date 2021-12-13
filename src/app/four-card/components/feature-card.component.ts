import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="grid p-6 bg-white border-t-4 {{
        feature.color
      }} rounded-md shadow-lg tablet:p-10 desktop:p-6 desktop:min-w-[320px]"
    >
      <h3 class="text-xl font-bold tablet:text-2xl desktop:text-xl">{{ feature.name }}</h3>
      <p class="mt-3 text-muted text-sm tablet:text-base desktop:text-sm">{{ feature.description }}</p>

      <div class="self-end mt-8 justify-self-end">
        <img class="max-w-16" [src]="feature.src" [alt]="feature.name" />
      </div>
    </div>
  `,
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
}
