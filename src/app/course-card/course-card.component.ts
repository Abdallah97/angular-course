import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: 'course-card',
  imports: [CommonModule, CourseImageComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true,
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course;
  @Input({
    required: true
  }) index: number;
  @Input() noImageTemplate:TemplateRef<any>;
  @Output() courseSelected: EventEmitter<Course> = new EventEmitter<Course>();
 @ContentChild(CourseImageComponent) courseImage: CourseImageComponent;

  

  onCourseViewed() {
    console.log('Course viewed: ', this.course);
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    return {
      'beginner': this.course.category === 'BEGINNER',
    };
  }
  cardStyles() {
    return {
      border: '1px solid ' + (this.course.category === 'BEGINNER' ? 'green' : 'blue'),
      'border-radius': '5px',
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['index']) {
      console.log('Index changed:', changes['index'].currentValue);
    }
  }
  
}
