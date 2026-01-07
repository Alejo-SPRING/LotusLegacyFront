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
        id: 'user_VaZEkJjAWql1',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767728781/lotuslegacy/kaeth_bgo9im.png',
        lvl: 90,
        name: 'LL_KAETH',
        rank: Rank.LEADER,
      },
      {
        id: 'user_0Myixy11oiuC',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767726913/lotuslegacy/duke_pkopbl.png',
        lvl: 90,
        name: 'LL_Duke',
        rank: Rank.ELITE,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729612/lotuslegacy/pj_miabdm.png',
        lvl: 90,
        name: 'LL_Artemis',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767727212/lotuslegacy/kasanova_etlpha.png',
        lvl: 90,
        name: 'LL_Kasanova',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729565/lotuslegacy/davidsc_zhssgx.png',
        lvl: 90,
        name: 'LL_DAVIDSC',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729612/lotuslegacy/pj_miabdm.png',
        lvl: 90,
        name: 'Galaga',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729082/lotuslegacy/indra_auhvc6.png',
        lvl: 90,
        name: 'LL_Indra',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'user_sP6zzCQCcb8H',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767724676/lotuslegacy/tenzo_h2lhbt.png',
        lvl: 90,
        name: 'TenZo',
        rank: Rank.MEMBER,
      },
      {
        id: 'user_m2x7t3vEfirl',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767724829/lotuslegacy/tama_rxksj7.png',
        lvl: 90,
        name: 'LL_TamaDios',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767725651/lotuslegacy/patron_oo7hws.jpg',
        lvl: 90,
        name: 'Patron507',
        rank: Rank.MEMBER,
      },
      {
        id: 'user_5QndSTHuyI9D',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767727675/junior_aegbyq.png',
        lvl: 90,
        name: 'Juniorjsl',
        rank: Rank.ELDER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729612/lotuslegacy/pj_miabdm.png',
        lvl: 90,
        name: 'LL_2AshlynQuinn3',
        rank: Rank.CO_LEADER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767749961/lotuslegacy/111braxo111_iq13ty.png',
        lvl: 90,
        name: '111Braxo111',
        rank: Rank.MEMBER,
      },
      {
        id: 'N/A',
        img: 'https://res.cloudinary.com/duifliwkw/image/upload/v1767729612/lotuslegacy/pj_miabdm.png',
        lvl: 90,
        name: '-Sakata-',
        rank: Rank.ELDER,
      },
    ];
  }
}
