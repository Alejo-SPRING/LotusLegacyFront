import { Injectable } from '@angular/core';
import { Member } from '../objects/member';
import { Rank } from '../objects/rank';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private baseUrl: string = './members/';

  public getMembers(): Member[] {
    return [
      {
        id: 'N/A',
        img: this.baseUrl + 'kaeth.png',
        lvl: 60,
        name: 'LF_KAETH',
        rank: Rank.LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'll_duke.gif',
        lvl: 90,
        name: 'LL_Duke',
        rank: Rank.ELITE,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'LL_Artemis',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'kasanova.png',
        lvl: 90,
        name: 'LL_Kasanova',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'LL_DAVIDSC',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'alexander',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'Galaga',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'indra.png',
        lvl: 90,
        name: 'LL_Indra',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 80,
        name: 'No-Mercy',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'LL_TamaDios',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'patron.png',
        lvl: 90,
        name: 'Patron507',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'junior.png',
        lvl: 90,
        name: 'Juniorjsl',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: 'LL_2AshlynQuinn3',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: '111Braxo111',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: this.baseUrl + 'pj.png',
        lvl: 90,
        name: '-Sakata-',
        rank: Rank.ELDER,
      },
    ];
  }
}
