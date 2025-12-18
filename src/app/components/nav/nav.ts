import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, NgbDropdownModule, TranslocoModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  @ViewChild('nav')
  public nav: ElementRef;
  private scrollOldPosition: number = 0;
  public langSelect: string = 'es';

  constructor(
    private render: Renderer2,
    private ngbModal: NgbModal,
    private router: Router,
    private transLocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.loadLang();
    this.router.events.subscribe((response) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  public changeLang(lang: string): void {
    this.langSelect = lang;
    localStorage.setItem('langSelect', lang);
    this.transLocoService.setActiveLang(lang);
  }

  private loadLang(): void {
    let lang: string | null = localStorage.getItem('langSelect');
    if (lang !== null) {
      this.langSelect = lang;
      this.changeLang(lang);
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    if (this.scrollOldPosition < window.scrollY) {
      this.render.setStyle(this.nav.nativeElement, 'display', 'none');
    } else {
      this.render.setStyle(this.nav.nativeElement, 'display', 'flex');
    }
    if (window.scrollY <= 0) {
      this.render.setStyle(this.nav.nativeElement, 'display', 'flex');
    }
    this.scrollOldPosition = window.scrollY;
  }

  public openMenu(target: any): void {
    this.ngbModal.open(target, { fullscreen: true });
  }
}
