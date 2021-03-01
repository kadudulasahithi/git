import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainsectionComponent, CoursesComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    MainsectionComponent,
    CoursesComponent,
    FooterComponent
]
})
export class UserModule { }
