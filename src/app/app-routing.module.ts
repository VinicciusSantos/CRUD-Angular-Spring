import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const mainRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
