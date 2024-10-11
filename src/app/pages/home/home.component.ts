import { Component } from '@angular/core';
import { RadioListComponent } from '../../components/radio-list/radio-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RadioListComponent],
})
export class HomeComponent {}
