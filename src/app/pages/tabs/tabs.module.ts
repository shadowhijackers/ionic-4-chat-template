import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
     { path: 'notifications', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule) },
     { path: 'message', loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule) },
     { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) },
    ]
  },
  {
    path: '',
    redirectTo:'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
