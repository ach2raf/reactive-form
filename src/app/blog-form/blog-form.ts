import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: "app-blog-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./blog-form.html",
})
export class BlogForm {
  categories = ["Tecnología", "Diseño", "Programación", "Novedades"];

  title = new FormControl("");
  description = new FormControl("");
  category = new FormControl("");
  tags = new FormControl("");
  email = new FormControl("");
  publishNow = new FormControl(true);
  publishDate = new FormControl("");

  onSubmit() {
    console.log({
      title: this.title.value,
      description: this.description.value,
      category: this.category.value,
      tags: this.tags.value,
      email: this.email.value,
      publishNow: this.publishNow.value,
      publishDate: this.publishDate.value,
    });
  }
}
