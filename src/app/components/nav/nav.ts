import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  @ViewChild('nav')
  public nav: ElementRef;
  private scrollOldPosition: number = 0;

  constructor(private render: Renderer2, private ngbModal: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((response) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
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
