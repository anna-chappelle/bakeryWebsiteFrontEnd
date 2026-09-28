import { Component } from '@angular/core';
import { BakedGoodsListComponent } from '@components/baked-goods-list/baked-goods-list.component';
import { HeroComponent } from '@components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BakedGoodsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
