import { Component } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ItemListComponent } from '@components/item-list/item-list.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ItemListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
