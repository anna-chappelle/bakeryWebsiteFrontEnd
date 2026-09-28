import { Component } from '@angular/core';
import { HeroComponent } from 'app/components/hero/hero.component';
import { ItemListComponent } from 'app/components/item-list/item-list.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ItemListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
