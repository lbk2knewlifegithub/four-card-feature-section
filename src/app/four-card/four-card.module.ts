import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureCardComponent, FeatureCardGridComponent } from './components';
import { FourCardPageComponent } from './containers';
import { FourCardPageRoutingModule } from './four-card-routing.module';

const COMPONENTS = [FeatureCardGridComponent, FeatureCardComponent];
const CONTAINERS = [FourCardPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, FourCardPageRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class FourCardModule {}
