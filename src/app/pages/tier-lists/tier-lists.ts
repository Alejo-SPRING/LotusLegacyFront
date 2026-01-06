import { Component, OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { TierlistService } from '../../core/services/tierlist.service';
import { Tier } from '../../core/objects/tier';

@Component({
  selector: 'app-tier-lists',
  imports: [TranslocoModule],
  templateUrl: './tier-lists.html',
  styleUrl: './tier-lists.scss',
})
export class TierLists implements OnInit {
  public tierLists: Tier[] = [];

  constructor(private tierlistService: TierlistService) {}

  ngOnInit(): void {
    this.tierLists = this.tierlistService.getTierLists();
  }
}
