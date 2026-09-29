import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { tap } from 'rxjs';
import { BakedGoodService } from '@services/baked-goods.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private bakedGoodService = inject(BakedGoodService);

  ngOnInit(): void {
    this.bakedGoodService
      .getAllBakedGoods()
      .pipe(
        tap((val) => {
          console.log('backend called');
          console.dir(val);
        }),
      )
      .subscribe();
  }
}
