import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl,FormGroup } from "@angular/forms";

@Component({
  selector: "app-blog-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./blog-form.html",
})
export class BlogForm {
    categories = ["Tecnología", "Diseño", "Programación", "Novedades"];

  BlogFormControl=new FormGroup({

  title : new FormControl(""),
  description : new FormControl(""),
  category : new FormControl(""),
  tags : new FormControl(""),
  email : new FormControl(""),
  publishNow : new FormControl(true),
  publishDate : new FormControl(""),
  });
  onSubmit() {
    console.log(this.BlogFormControl.value);
  }


 /* formSubmit() {
      console.log(title: this.title.value);
      console.log(description: this.description.value);
      console.log(category: this.category.value);
      .
      .
      .
      .
      .
    });
  }*/
}
