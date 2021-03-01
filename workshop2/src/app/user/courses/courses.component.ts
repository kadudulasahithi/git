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
      duration: 2,
      price: 2000,
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...'
    },
    {
      id: 1,
      name: 'java',
      duration: 2,
      price: 2000,
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...'
    },
    {
      id: 1,
      name: 'java',
      duration: 2,
      price: 2000,
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...'
    },
    {
      id: 1,
      name: 'java',
      duration: 2,
      price: 2000,
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...'
    },{
      id: 1,
      name: 'java',
      duration: 2,
      price: 2000,
      startDate: new Date(2021, 2, 10),
      description: 'additional information regarding courses...'
    }
    
  ]
}
