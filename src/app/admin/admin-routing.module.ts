import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BccComponent } from './bcc/bcc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadquatersComponent } from './headquaters/headquaters.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: 'Dashboard',
        component: DashboardComponent
      },
      {
        path: 'Bcc',
        component: BccComponent
      },
      {
        path: 'Headquaters',
        component: HeadquatersComponent
      }
      // {
      //   path: 'ServiceProviders',
      //   component: ServiceprovidersComponent
      // },
      // {
      //   path: 'Vendors',
      //   component: VendorsComponent
      // },
      // {
      //   path: 'UserList',
      //   component: UserlistComponent
      // },
      // {
      //   path: 'Rating',
      //   component: RatingComponent
      // },
      // {
      //   path: 'Products',
      //   component: ProductsComponent
      // },
      // {
      //   path: 'awardpoints',
      //   component: AwardpointsComponent
      // },
      // {
      //   path: 'Documentation',
      //   component: DocumentationComponent
      // },
      // {
      //   path: 'feedback',
      //   component: FeedbackComponent
      // },
      // {
      //   path: 'complaints',
      //   component: ComplaintsComponent
      // },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
      // {
      //   path: 'vendorproducts',
      //   component: VendorproductsComponent
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
