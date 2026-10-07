import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { BakedGood } from '@models/baked-good.model';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-baked-good',
  styleUrl: './baked-good.component.scss',
  templateUrl: './baked-good.component.html',
})
export class BakedGoodComponent {
  readonly bakedGood = input.required<BakedGood>();
}
