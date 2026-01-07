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
      {
        title: this.transLocoService.translate('tier-lists.card.3.title'),
        icon: 'fa-fire',
        description: this.transLocoService.translate('tier-lists.card.3.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767742848/tier-lists/tier-jutsu-boss_lhzmlm.jpg',
      },
      {
        title: this.transLocoService.translate('tier-lists.card.4.title'),
        icon: 'fa-ring',
        description: this.transLocoService.translate('tier-lists.card.4.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767742848/tier-lists/tier-accesories_m8qzl3.jpg',
      },
      {
        title: this.transLocoService.translate('tier-lists.card.5.title'),
        icon: 'fa-paw',
        description: this.transLocoService.translate('tier-lists.card.5.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767742847/tier-lists/tier-pets_i5hvaq.jpg',
      },
      {
        title: this.transLocoService.translate('tier-lists.card.6.title'),
        icon: 'fa-hand-fist',
        description: this.transLocoService.translate('tier-lists.card.6.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767742847/tier-lists/tier-jutsus-power_vovhiu.jpg',
      },
      {
        title: this.transLocoService.translate('tier-lists.card.7.title'),
        icon: 'fa-hand-fist',
        description: this.transLocoService.translate('tier-lists.card.7.description'),
        byName: 'Yanuar',
        byUrl: 'https://www.facebook.com/yanuar.a.saputra.9',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767742848/tier-lists/tier-jutsus_k3smco.jpg',
      },
    ];
  }
}
