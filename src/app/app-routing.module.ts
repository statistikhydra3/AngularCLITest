import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableTestComponent } from './table-test/table-test.component';

const routes: Routes = [
    {path: 'table-test', component: TableTestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableTestComponent]