import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-list',
  standalone: true,  // ← This is crucial
  imports: [CommonModule, HttpClientModule],  // ← Add required modules here
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  items: Item[] = [];
  isLoading = true;
  constructor(private dataService: DataService) {


   }
   ngOnInit(): void {
    this.dataService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching items:', error);
        this.isLoading = false;
      }
    });
   }
}
