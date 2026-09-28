import { Component, inject } from '@angular/core';
import { BakedGoodComponent } from '@components/baked-good/baked-good.component';
import { BakedGoodsStore } from '@stores/baked-goods.store';

@Component({
  selector: 'app-baked-goods-list',
  providers: [BakedGoodsStore],
  imports: [BakedGoodComponent],
  templateUrl: './baked-goods-list.component.html',
  styleUrl: './baked-goods-list.component.scss',
})
export class BakedGoodsListComponent {
  private readonly bakedGoodsStore = inject(BakedGoodsStore);
}
