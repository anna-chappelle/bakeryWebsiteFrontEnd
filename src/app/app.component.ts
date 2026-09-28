import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BackendService } from '@services/backend.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private backendService = inject(BackendService);

  ngOnInit(): void {
    this.backendService
      .testBackend()
      .pipe(tap(() => console.log('backend called')))
      .subscribe();
  }
}
