import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatListModule, MatToolbarModule, MatTooltipModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule
  ],

  declarations: []
})
export class CustomMaterialModule { }
