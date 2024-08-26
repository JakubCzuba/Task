import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { WelcomebuttonComponent } from './components/welcomebutton/welcomebutton.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CommonModule } from '@angular/common';
import { HwcolorDirective } from './directives/hwcolor/hwcolor.directive';
import { MenuadiComponent } from './components/menuadi/menuadi.component';
import { ClassItem } from './Models/menu-item.interface';
import { MenuButtons } from './Models/menu-buttons.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Falsy, first } from 'rxjs';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
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
    },
    {
      name: 'List',
      backgroundColor: 'darkred',
      padding: '20px',
      margin: '20px',
      color: 'black',
      border: 'solid',
      width: '100px',
      height: '20px',
    }
  ];

  formGrup1: FormGroup;
  showFavBrowar: Boolean = false;
  showNazwiskoPanienskie: Boolean = false;

  constructor(private formBuilder1: FormBuilder) {

    this.formGrup1 = this.formBuilder1.group({
      firstName: this.formBuilder1.control('', Validators.required),
      lastName: this.formBuilder1.control('', Validators.required),
      age: this.formBuilder1.control(0,  Validators.required),
      favBrowar: this.formBuilder1.control(''),
      nazwiskoPanienskie: this.formBuilder1.control('')
    })

  }
  ngOnInit(): void {
    this.formGrup1.valueChanges.subscribe(values => {
       if (values.age >= 18)
       {
        this.showFavBrowar = true;
       }
       else{
        this.showFavBrowar = false;
       }

       if (values.firstName.slice(-1) === "a")
       {
        this.showNazwiskoPanienskie = true;
       }
       else{
        this.showNazwiskoPanienskie = false;
       }
    })
  }

}



