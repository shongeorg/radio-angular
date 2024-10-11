import { Injectable } from '@angular/core';
import { Station } from '../interfaces/station';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  play(station: Station): void {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(station.url_resolved);
    this.audio.play();
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  setVolume(volume: number) {
    if (this.audio) {
      this.audio!.volume = volume;
    }
  }
}
