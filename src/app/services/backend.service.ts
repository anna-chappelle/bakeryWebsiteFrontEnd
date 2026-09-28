import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BakedGood } from '@models/baked-good.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly BACKEND_URL = environment.backendUrl;
  private readonly http = inject(HttpClient);

  testBackend(): Observable<object> {
    return this.http.get(this.BACKEND_URL + '/test');
  }

  getBakedGoods(): Observable<{ bakedGoods: BakedGood[] }> {
    return of({
      bakedGoods: [
        {
          id: '1',
        },
      ],
    });
  }
}
