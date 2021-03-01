import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { AppModule } from '../app.module';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, 
    MainsectionComponent
    
    ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, 
     MainsectionComponent
   ]
})
export class AdminModule { }
