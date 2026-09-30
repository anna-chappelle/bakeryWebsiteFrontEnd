import { Component, inject } from '@angular/core';
import { BakedGoodsListComponent } from '@components/baked-goods-list/baked-goods-list.component';
import { HeroComponent } from '@components/hero/hero.component';
import { BakedGoodStore } from '@stores/baked-goods.store';

@Component({
  selector: 'app-home',
  providers: [BakedGoodStore],
  imports: [HeroComponent, BakedGoodsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected bakedGoodStore = inject(BakedGoodStore);
}
