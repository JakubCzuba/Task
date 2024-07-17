import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { WelcomebuttonComponent } from './components/welcomebutton/welcomebutton.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CommonModule } from '@angular/common';
import { HwcolorDirective } from './directives/hwcolor/hwcolor.directive';
import { MenuadiComponent } from './components/menuadi/menuadi.component';
import { ClassItem } from './Models/menu-item.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HelloworldComponent,
    WelcomebuttonComponent,
    HighlightDirective,
    CommonModule,
    HwcolorDirective,
    MenuadiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'task';
  x = 2;
  menutitems: ClassItem[] = [
    {
      name: 'opcja1',
      backgroundColor: 'green'
    },
    {
      name: 'opcja2',
      backgroundColor: 'brown'
    },
    {
      name: 'opcja3',
      backgroundColor: 'yellow'
    }
  ];
}
