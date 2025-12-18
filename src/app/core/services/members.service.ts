import { Injectable } from '@angular/core';
import { Member } from '../objects/member';
import { Rank } from '../objects/rank';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  public getMembers(): Member[] {
    return [
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023291/lotuslegacy/kaeth_uhwqwr.png',
        lvl: 60,
        name: 'LF_KAETH',
        rank: Rank.LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023292/lotuslegacy/ll_duke_obvyzl.gif',
        lvl: 90,
        name: 'LL_Duke',
        rank: Rank.ELITE,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'LL_Artemis',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023291/lotuslegacy/kasanova_p5ednj.png',
        lvl: 90,
        name: 'LL_Kasanova',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'LL_DAVIDSC',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'alexander',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'Galaga',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023291/lotuslegacy/indra_loe6ep.png',
        lvl: 90,
        name: 'LL_Indra',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 80,
        name: 'No-Mercy',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'LL_TamaDios',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023291/lotuslegacy/patron_wrmehh.jpg',
        lvl: 90,
        name: 'Patron507',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/junior_ppkwoc.jpg',
        lvl: 90,
        name: 'Juniorjsl',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: 'LL_2AshlynQuinn3',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: '111Braxo111',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1766023290/lotuslegacy/pj_ygczm6.png',
        lvl: 90,
        name: '-Sakata-',
        rank: Rank.ELDER,
      },
    ];
  }
}
