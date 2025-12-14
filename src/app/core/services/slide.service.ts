import { Injectable } from '@angular/core';
import { Slide } from '../objects/slide';

@Injectable({
  providedIn: 'root',
})
export class SlideService {
  private baseUrl: string = './imgs/';

  public getSlides(): Slide[] {
    return [
      {
        img: this.baseUrl + 'dash1.jpg',
        title: '¡Eventos y rifas del clan!',
        message: 'Participa en nuestros eventos o rifas y gana jutsus, tokens y más.',
      },
      {
        img: this.baseUrl + 'dash2.jpg',
        title: 'Guild war',
        message:
          'Donar activamente 3K de proviciones diarias y participar activamente en la guerra.',
      },
    ];
  }
}
