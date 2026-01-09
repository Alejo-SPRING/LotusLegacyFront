import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../core/services/members.service';
import { Member } from '../../core/objects/member';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AlertService } from '../../core/services/alert.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-members',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members implements OnInit {
  public members: Member[] = [];

  constructor(
    private membersService: MembersService,
    private alertService: AlertService,
    private transLocoService: TranslocoService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }

  public copyId(member: Member): void {
    let success: boolean = this.clipboard.copy(member.id);
    this.alertService.toast(
      success
        ? `¡${member.name} ${this.transLocoService.translate('recruit-ninjas.successCopy')}`
        : this.transLocoService.translate('recruit-ninjas.errorCopy'),
      success ? 'success' : 'error'
    );
  }
}
