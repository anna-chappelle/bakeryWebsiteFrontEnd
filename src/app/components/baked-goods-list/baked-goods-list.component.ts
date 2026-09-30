import { Component, input } from '@angular/core';
import { BakedGoodComponent } from '@components/baked-good/baked-good.component';
import { BakedGood } from '@models/baked-good.model';

@Component({
  selector: 'app-baked-goods-list',
  imports: [BakedGoodComponent],
  templateUrl: './baked-goods-list.component.html',
  styleUrl: './baked-goods-list.component.scss',
})
export class BakedGoodsListComponent {
  readonly bakedGoods = input.required<BakedGood[]>();
}
