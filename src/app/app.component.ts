import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { WelcomebuttonComponent } from './components/welcomebutton/welcomebutton.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CommonModule } from '@angular/common';
import { HwcolorDirective } from './directives/hwcolor/hwcolor.directive';
import { MenuadiComponent } from './components/menuadi/menuadi.component';
import { ClassItem } from './Models/menu-item.interface';
import { MenuButtons } from './Models/menu-buttons.interface';

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
    MenuadiComponent,
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
      backgroundColor: 'green',
      width: '100px'
    },
    {
      name: 'opcja2',
      backgroundColor: 'brown',
      width: '100px'
    },
    {
      name: 'opcja3',
      backgroundColor: 'yellow',
      width: '100px'
    }
  ];

  menubuttons: MenuButtons[] = [
    {
      name: 'Home',
      backgroundColor: 'green',
      padding: '20px',
      margin: '20px',
      color: 'black',
      border: 'solid',
      width: '100px',
      height: '20px',
    }
  ];
}
