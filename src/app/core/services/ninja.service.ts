import { Injectable, PipeTransform } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  delay,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Ninja } from '../objects/ninja';
import { State } from '../objects/state';
import { DecimalPipe } from '@angular/common';
import { SortColumn, SortDirection } from '../types/sort.type';
import { SearchNinjaResult } from '../objects/search-ninja-result';
import { NINJAS } from '../data/ninjas.data';

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

@Injectable({
  providedIn: 'root',
})
export class NinjaService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _ninjas$ = new BehaviorSubject<Ninja[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._ninjas$.next(result.ninjas);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  private sort(ninjas: Ninja[], column: SortColumn, direction: string): Ninja[] {
    if (direction === '' || column === '') {
      return ninjas;
    } else {
      return [...ninjas].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  private matches(ninja: Ninja, term: string, pipe: PipeTransform) {
    return (
      ninja.name.toLowerCase().includes(term.toLowerCase()) ||
      ninja.id.toLowerCase().includes(term.toLowerCase())
    );
  }

  get ninjas$() {
    return this._ninjas$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchNinjaResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let ninjas = this.sort(NINJAS, sortColumn, sortDirection);

    // 2. filter
    ninjas = ninjas.filter((ninja) => this.matches(ninja, searchTerm, this.pipe));
    const total = ninjas.length;

    // 3. paginate
    ninjas = ninjas.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ ninjas, total });
  }
}
