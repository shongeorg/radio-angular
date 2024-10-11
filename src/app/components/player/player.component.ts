import { Component } from '@angular/core';
import { RadioService } from '../../shared/services/radio.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent {
  constructor(private radioService: RadioService) {}
  play() {
    this.radioService.playAudio();
  }

  pause() {
    this.radioService.pauseAudio();
  }

  stop() {
    this.radioService.stopAudio();
  }

  setVolume(e: Event) {
    const target = e.target as HTMLInputElement;
    this.radioService.volumeAudio(+target.value);
  }
}
