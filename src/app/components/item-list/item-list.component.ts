import { Component, inject } from '@angular/core';
import { BakedGoodsStore } from '@stores/baked-goods.store';

@Component({
  selector: 'app-item-list',
  providers: [BakedGoodsStore],
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  private readonly bakedGoodsStore = inject(BakedGoodsStore);
}
