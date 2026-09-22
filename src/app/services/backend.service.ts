import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly BACKEND_URL = environment.backendUrl;
  private readonly http = inject(HttpClient);

  testBackend(): Observable<object> {
    return this.http.get(this.BACKEND_URL + '/test');
  }
}
