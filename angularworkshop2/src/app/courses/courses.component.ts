import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses: any[] = [
    {
      id: 1,
      name: 'java',
      duration: '2 months',
      price: 2000,
      conversion:'',
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...',
  

    },
    {
      id: 2,
      name: 'python',
      duration: '1 month',
      price: 2000,
      conversion:'',
      startDate: new Date(2021, 3, 10),
      description: 'additional information regarding courses...',
      
    },
    {
      id: 3,
      name: 'C++',
      duration: '3 months',
      price: 2000,
      conversion:'',
      startDate: new Date(2021, 4, 10),
      description: 'additional information regarding courses...',
      
    },
    {
      id: 4,
      name: 'mysql',
      duration: '1 month',
      price: 2000,
      conversion:'',
      startDate: new Date(2021, 5, 10),
      description: 'additional information regarding courses...',
      
    },
    {
      id: 5,
      name: '.net',
      duration: '4 months',
      startDate: new Date(2021, 6, 10),
      price: 2000,
      conversion:'',
      description: 'additional information regarding courses...',
     
    }

    
  ]
 usdinr: boolean=true
 toggleInrUsd(){
   this.usdinr=!this.usdinr
 }
}
