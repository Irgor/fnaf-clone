import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  sfxPath = '../../assets/sfx/';
  audios = {
    menuHover: 'menu-hover-sfx.mp3',
    menuSound: 'main-menu-sfx.mp3',
    fone1: 'fone-audio-1.mp3',
    fan: 'fan-background.mp3',
  }

  menuHoverAudio = new Audio();
  menuSoundAudio = new Audio();
  fone = new Audio();
  fan = new Audio();

  menuHover() {
    this.menuHoverAudio.src = this.getAudio(this.audios.menuHover);
    this.menuHoverAudio.play();
  }

  menuSound() {
    this.menuSoundAudio.src = this.getAudio(this.audios.menuSound);
    this.menuSoundAudio.volume = .4;
    this.menuSoundAudio.loop = true;
    this.menuSoundAudio.play();
  }

  stopMenuSound() {
    this.menuSoundAudio.pause();
  }

  fone1() {
    this.fone.src = this.getAudio(this.audios.fone1);
    this.fone.volume = 1;
    this.fone.play();
  }

  fone1Stop() {
    this.fone.pause();
  }

  fanSound() {
    this.fan.src = this.getAudio(this.audios.fan);
    this.fan.volume = .6;
    this.fan.play()
    this.fan.loop = true;
  }

  fanStop() {
    this.fan.pause();
  }

  getAudio(name: string): string {
    return this.sfxPath + name;
  }

}
