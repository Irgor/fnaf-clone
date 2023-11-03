import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/shared/services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private sfx: AudioService
  ) { }

  ngOnInit(): void {
    this.interact();
  }

  interact() {
    this.sfx.menuSound();
  }

  play() {
    this.sfx.stopMenuSound();
    this.router.navigate(['/play']);
  }

  hover() {
    this.sfx.menuHover();
  }
}
