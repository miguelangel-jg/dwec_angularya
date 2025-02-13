import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dwec_angularya';

  nombre = "Gitano";
  edad = 19;
  fumador = true;

  esFumador(){
    return this.fumador ? "Fuma como un putisimo carretero" : "Fuma menos que el puma";

  }
}
