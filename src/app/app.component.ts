import { Component, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
 courses = [...COURSES];

 @ViewChildren(CourseCardComponent)
 courseCards!: QueryList<CourseCardComponent>;
 onCourseSelected(course: Course) {
    
    console.log('Course selected: ', course);
}

trackIndex(index: number, course: Course) {
    return course.id;
}

ngAfterViewInit(): void {
    console.log('Course cards: ', this.courseCards.first);
    this.courseCards.changes.subscribe((courseCards: QueryList<CourseCardComponent>) => {
        console.log('Course cards changed: ', courseCards);
    });
    
}
onAddCourse() {
    const newCourse: Course = {
        id: 123,
        description: 'New Course',
        iconUrl: 'https://example.com/icon.png',
        longDescription: 'This is a new course.',
        category: 'BEGINNER',
        lessonsCount: 10
    };
    this.courses.push(newCourse);
}   }
    