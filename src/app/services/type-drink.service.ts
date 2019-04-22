import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class TypeDrinkService {

  constructor(
    private http: HttpClient
  ) {
  }

  typeDrinkApiUrl = 'types/drinks';

  getAllTypeDrinkData(): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.typeDrinkApiUrl}`, {headers});
  }

  addNewTypeDrink(typeBody): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.typeDrinkApiUrl}`, typeBody, {headers});
  }

  deleteTypeDrink(type): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));
    return this.http.delete<Response>(`${Hosts.API_HOST}/${this.typeDrinkApiUrl}/${type}`, {headers});
  }

}
