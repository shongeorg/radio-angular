import { Component } from '@angular/core';
import { Station } from '../../shared/interfaces/station';
import { RadioService } from '../../shared/services/radio.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-list.component.html',
  styleUrl: './radio-list.component.css',
})
export class RadioListComponent {
  stations$: Observable<Station[]>;
  currentStation$: Observable<Station | null>;

  constructor(private radioService: RadioService) {
    this.stations$ = this.radioService.stations$;
    this.currentStation$ = this.radioService.currentStation$;
  }

  setActiveStation(station: Station) {
    this.radioService.setCurrentStation(station);
  }
}
