import { Component, Input } from "@angular/core";

// decorator
@Component({
  selector: "app-photo",
  templateUrl: "./photo.components.html"
})

export class PhotoComponent {
   @Input() url= '';
   @Input() description = '';
}