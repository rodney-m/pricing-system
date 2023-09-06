import { PageRequest } from '@pricing-system/core';
import { FieldOptionData } from './field-option';
import { Observable } from 'rxjs';

export interface FieldOptionApi {
  url: string;
  name?: string;
  value?: string;
  mapper?: (content: any[]) => FieldOptionData[];
  searcher?: (value: string) => Observable<FieldOptionData[]>;
  pageRequest?: PageRequest;
}
