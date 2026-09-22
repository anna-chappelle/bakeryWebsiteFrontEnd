import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from '@services/backend.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly backendService = inject(BackendService);
  protected readonly title = 'bakery-website-frontend';

  protected backendResponse = signal<string>('~loading~');

  ngOnInit(): void {
    this.backendService
      .testBackend()
      .pipe(
        tap((res) => {
          console.dir(res);
          return this.backendResponse.set(JSON.stringify(res));
        }),
      )
      .subscribe();
  }
}
