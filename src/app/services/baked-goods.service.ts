import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Service()
export class BakedGoodService {
  private readonly BAKED_GOOD_URL = environment.backendUrl + '/baked-good';
  private readonly http = inject(HttpClient);

  getAllBakedGoods(): Observable<object> {
    return this.http.get(this.BAKED_GOOD_URL);
  }
}
