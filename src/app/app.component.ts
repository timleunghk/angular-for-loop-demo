// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemListComponent], // ← Import your component here
  template: `
    <app-item-list></app-item-list>
  `,
})
export class AppComponent {}
