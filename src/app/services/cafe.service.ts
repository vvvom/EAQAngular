import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Hosts} from '../models/Hosts';
import {Response} from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(
    private http: HttpClient
  ) {
  }

 isLogged = new BehaviorSubject(!!localStorage.getItem('token'));

  cafeApiUrl = 'cafes';

  sendDataCafe(cafeBody): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.cafeApiUrl}/login`, cafeBody);
  }
}
