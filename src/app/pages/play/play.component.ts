import { Component, HostListener, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AudioService } from 'src/app/shared/services/audio.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {
  @ViewChild('screen') screen!: { nativeElement: HTMLImageElement };

  imageMove = -25;
  imagePath = '../../../assets/images/';
  actualImage = this.imagePath + 'office2.png';

  foneTimeout: any;

  usages = [true, true, true]

  constructor(
    private sfx: AudioService
  ) { }

  ngOnInit(): void {
    this.sfx.fanSound();
    this.foneTimeout = setTimeout(() => {
      this.sfx.fone1();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.sfx.fanStop();
    this.sfx.fone1Stop();
    clearTimeout(this.foneTimeout);
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const pos = event.clientX;

    if (pos <= 150) {
      this.doMouseMove('left');
    } else if (pos >= window.innerWidth - 210) {
      this.doMouseMove('right');
    } else {
      this.doMouseMove('middle')
    }
  }

  doMouseMove(value: 'left' | 'right' | 'middle'): void {
    let newValue = this.imageMove;
    if (value == 'left') {
      newValue = 0;
    } else if (value == 'right') {
      newValue = -50;
    } else {
      newValue = -25;
    }

    this.imageMove = newValue;
    this.screen.nativeElement.style.marginLeft = newValue + '%';
  }

  getUses() {
    return this.usages.filter(usage => usage);
  }
}
