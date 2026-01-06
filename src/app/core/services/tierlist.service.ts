import { Injectable } from '@angular/core';
import { Tier } from '../objects/tier';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class TierlistService {
  constructor(private transLocoService: TranslocoService) {}

  public getTierLists(): Tier[] {
    return [
      {
        title: this.transLocoService.translate('tier-lists.card.1.title'),
        icon: 'fa-shirt',
        description: this.transLocoService.translate('tier-lists.card.1.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767725124/tier-lists/tier-clothes-package_gczqdr.jpg',
      },
      {
        title: this.transLocoService.translate('tier-lists.card.2.title'),
        icon: 'fa-wind',
        description: this.transLocoService.translate('tier-lists.card.2.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767725125/tier-lists/tier-disperse-jutsu_d8jii8.jpg',
      },
    ];
  }
}
