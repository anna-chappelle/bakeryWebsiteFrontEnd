import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';
import { tap, pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly backendService = inject(BackendService);
  title = 'bakery-website-frontend';
  backendResponse = signal<string>('');

  ngOnInit(): void {
    this.backendService.testBackend().pipe(
        tap(res => {
            console.dir(res)
            return this.backendResponse.set(JSON.stringify(res));
        })
      ).subscribe();
  }
}
