import { Ninja } from '../objects/ninja';

export type SortColumn = keyof Ninja | '';
export type SortDirection = 'asc' | 'desc' | '';
