import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hosts} from '../models/Hosts';
import {Response} from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  userApiUrl = 'users';

  sendDataUser(userBody): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.userApiUrl}`, userBody);
  }

  getData(): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/payments`);
  }
}
