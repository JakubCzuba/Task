import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MenuButtons } from '../../Models/menu-buttons.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcomebutton',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './welcomebutton.component.html',
  styleUrl: './welcomebutton.component.scss'
})
export class WelcomebuttonComponent {

  @Input() menuitems: MenuButtons[] = []

}