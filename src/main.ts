import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ItemListComponent } from './app/components/item-list/item-list.component';

//bootstrapApplication(AppComponent, appConfig)
//  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Required for HttpClient
    // Add any other providers here
  ]
}).catch(err => console.error(err));
