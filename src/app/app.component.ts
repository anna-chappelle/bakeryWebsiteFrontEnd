import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BakedGoodsStore } from '@stores/baked-goods.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  providers: [BakedGoodsStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private bakedGoodStore = inject(BakedGoodsStore);

  ngOnInit(): void {
    this.bakedGoodStore.loadBakedGoods();
  }
}
