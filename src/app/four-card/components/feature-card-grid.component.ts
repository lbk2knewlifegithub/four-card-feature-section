import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="grid gap-10 features desktop:gap-6">
      <ng-container *ngFor="let feature of features">
        <lbk-feature-card
          class="block w-full"
          [feature]="feature"
        ></lbk-feature-card>
      </ng-container>
    </section>
  `,
  styles: [
    `
      .features {
        align-items: center;

        lbk-feature-card {
          &:first-child {
            @apply desktop:row-start-1 desktop:row-span-2;
          }
          &:nth-child(3) {
            @apply desktop:col-start-2 desktop:row-start-2;
          }

          &:last-child {
            @apply desktop:col-start-3 desktop:row-start-1 desktop:row-span-2;
          }
        }
      }
    `,
  ],
})
export class FeatureCardGridComponent {
  @Input() features!: Feature[];
}
