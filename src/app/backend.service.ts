import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly url = environment.backendUrl;
  readonly #http = inject(HttpClient);

  testBackend(): Observable<object> {
    return this.#http.get(this.url + "/test");
  }

}
