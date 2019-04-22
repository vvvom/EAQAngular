import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class TypeFoodService {

  constructor(
    private http: HttpClient
  ) {
  }

  typeFoodApiUrl = 'types/foods';

  getAllTypeFoodData(): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.typeFoodApiUrl}`, {headers});
  }

  addNewTypeFood(typeBody): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.typeFoodApiUrl}`, typeBody, {headers});
  }

}
