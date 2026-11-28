import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatToolbarModule, MatButtonModule,
        MatIconModule,
        RouterModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CRUD-signals';
}
