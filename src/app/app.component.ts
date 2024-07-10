import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomebuttonComponent } from './components/welcomebutton/welcomebutton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloworldComponent, WelcomebuttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task';
}
