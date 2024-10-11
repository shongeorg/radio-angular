import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../interfaces/station';
import { Observable, BehaviorSubject } from 'rxjs';
import { AudioService } from './audio-service.service';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  private stationsSubject = new BehaviorSubject<Station[]>([]);
  public stations$ = this.stationsSubject.asObservable();

  private currentStationSubject = new BehaviorSubject<Station | null>(null);
  public currentStation$ = this.currentStationSubject.asObservable();

  constructor(private http: HttpClient, private audioService: AudioService) {
    this.loadRadioStations();
  }

  private loadRadioStations(): void {
    this.getRadioStations().subscribe((stations) => {
      this.stationsSubject.next(stations);
      this.currentStationSubject.next(stations[0] || null);
    });
  }

  private getRadioStations(): Observable<Station[]> {
    return this.http.get<Station[]>(
      'https://de1.api.radio-browser.info/json/stations/bycountry/Ukraine'
    );
  }

  public setCurrentStation(station: Station) {
    this.currentStationSubject.next(station);
    this.audioService.play(station);
  }

  stopAudio() {
    this.audioService.stop();
  }

  playAudio() {
    const currentStation = this.currentStationSubject.value;
    if (currentStation) {
      this.audioService.play(currentStation);
    }
  }

  pauseAudio() {
    this.audioService.pause();
  }

  volumeAudio(volume: number) {
    this.audioService.setVolume(volume);
  }
}
