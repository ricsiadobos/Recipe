import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeatured = 'recipe';
  title = 'Recipe';

  onNavigate(feature: string){
this.loadedFeatured = feature;
  }
}
