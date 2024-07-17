import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ClassItem } from '../../Models/menu-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menuadi',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './menuadi.component.html',
  styleUrl: './menuadi.component.scss'
})
export class MenuadiComponent {

  @Input() items: ClassItem[] = []

  
}
