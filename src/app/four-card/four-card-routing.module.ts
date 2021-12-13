import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourCardPageComponent } from './containers';

const routes: Routes = [{ path: '', component: FourCardPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourCardPageRoutingModule {}
