import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://level-up-api-mefqhdpvub.now.sh`

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {
  model = `instruments`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }

  create(instrument) {
    return this.http.post(this.getUrl(), instrument);
  }

  update(instrument) {
    return this.http.patch(this.getUrlForId(instrument.id), instrument);
  }

  delete(instrumentId) {
    return this.http.delete(this.getUrlForId(instrumentId));
  }
}
