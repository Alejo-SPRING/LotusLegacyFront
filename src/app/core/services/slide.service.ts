import { Injectable } from '@angular/core';
import { Slide } from '../objects/slide';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class SlideService {
  private baseUrl: string = './imgs/';

  constructor(private transLocoService: TranslocoService) {}

  public getSlides(): Slide[] {
    return [
      {
        img: this.baseUrl + 'dash1.jpg',
        title: this.transLocoService.translate('home.slides.1.title'),
        message: this.transLocoService.translate('home.slides.1.message'),
      },
      {
        img: this.baseUrl + 'dash2.jpg',
        title: this.transLocoService.translate('home.slides.2.title'),
        message: this.transLocoService.translate('home.slides.2.message'),
      },
    ];
  }
}
