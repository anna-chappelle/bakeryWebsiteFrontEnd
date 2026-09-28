import { Component, inject } from '@angular/core';
import { ItemStore } from 'app/stores/item.store';

@Component({
  selector: 'app-item-list',
  providers: [ItemStore],
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  private readonly itemStore = inject(ItemStore);
}
