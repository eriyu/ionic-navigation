import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondPage } from './second';
import { ComponentsModule } from '../../components/components.module';
import { FeatureModule } from "../../feature/feature.module";

@NgModule({
  declarations: [
    SecondPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
    ComponentsModule,
    FeatureModule
  ],
})
export class SecondPageModule {}
