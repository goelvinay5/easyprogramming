import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', redirectTo: '' }
];
