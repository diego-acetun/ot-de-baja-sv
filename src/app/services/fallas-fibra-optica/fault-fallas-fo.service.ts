import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../header.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaultFallasFOService {

  constructor(
    private http: HttpClient,
    private queryService: HeaderService
  ) { }

  getDataRegiones(input? : any) {
    return this.http.get(`${environment.apiURL}/fallasFibraOptica/fault/getRegiones/${input}`)
  }
}