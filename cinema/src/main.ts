import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Предполагается, что у вас есть AppModule

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));