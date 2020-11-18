import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.model';
import {IonItem, IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  recipes: Recipe[];
  data2 = 'hehe';
  constructor(
      private rs: RecipesService
  ) { }

  ngOnInit() {
    this.recipes = this.rs.getAllRecipes();
    console.log(this.recipes);
  }

  fav(recipe: Recipe, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(recipe.title, 'added to favorite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('Share', recipe.title, 'to social media');
  }

  onFilterUpdate(event: CustomEvent) {
    console.log(event.detail);
    if (event.detail.value === 'all') {
      this.recipes = this.rs.getAllRecipes();
    }else {
      this.recipes = this.rs.getAllRecipes();
      this.recipes.pop();
    }
  }

  wkwk(slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log('wkwk');
  }
}
