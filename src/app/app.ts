import { Component } from '@angular/core';
import { BlogForm } from './blog-form/blog-form';

@Component({
  selector: 'app-root',
  imports: [BlogForm],
  templateUrl: './app.html',
})
export class App {}