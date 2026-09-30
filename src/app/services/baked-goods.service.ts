import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '@environments/environment';
import { BakedGood } from '@models/baked-good.model';

@Service()
export class BakedGoodService {
  private readonly BAKED_GOOD_URL = environment.backendUrl + '/baked-good';
  private readonly http = inject(HttpClient);

  getAllBakedGoods() {
    return this.http.get<BakedGood[]>(this.BAKED_GOOD_URL);
  }
}
