import { Component, inject } from '@angular/core';
import { BakedGoodsStore } from '@stores/baked-goods.store';

@Component({
  selector: 'app-baked-goods-list',
  providers: [BakedGoodsStore],
  imports: [],
  templateUrl: './baked-goods-list.component.html',
  styleUrl: './baked-goods-list.component.scss',
})
export class BakedGoodsListComponent {
  private readonly bakedGoodsStore = inject(BakedGoodsStore);
}
