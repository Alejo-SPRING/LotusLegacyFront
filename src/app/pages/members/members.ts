import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../core/services/members.service';
import { Member } from '../../core/objects/member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members implements OnInit {
  public members: Member[] = [];

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
