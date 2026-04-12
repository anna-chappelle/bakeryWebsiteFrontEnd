import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  readonly url = environment.backendUrl;
  readonly #http = inject(HttpClient);

  testBackend(): void {
    this.#http.get(this.url)
      .pipe(
        tap(val => console.dir(val))
      ).subscribe();
  }

}
