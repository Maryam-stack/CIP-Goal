import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToteBag } from './toteBag.interface';
import { TOTEBAGS } from './toteBag.const';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ToteBagsService {
  constructor(private http: HttpClient, private messageService: MessageService)
  {

  }
  getToteBags(): Observable<ToteBag[]> {
    const heroes = of(TOTEBAGS);
    return heroes;
  }

  getToteBag(id: number): Observable<ToteBag> {
    const toteBag = TOTEBAGS.find(tote => tote.id === id)!;
    return of(toteBag);
  }
}


