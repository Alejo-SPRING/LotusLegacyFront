import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlide,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { Slide } from '../../core/objects/slide';
import { SlideService } from '../../core/services/slide.service';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-inicio',
  imports: [NgbCarousel, NgbSlide, TranslocoModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit {
  public paused: boolean = false;
  public unpauseOnArrow: boolean = false;
  public pauseOnIndicator: boolean = false;
  @ViewChild('carousel', { static: true })
  public carousel: NgbCarousel;
  public slides: Slide[];

  constructor(private slideService: SlideService) {}

  ngOnInit(): void {
    this.slides = this.slideService.getSlides();
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
}
