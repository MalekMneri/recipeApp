import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEmptyComponent } from './recipes/recipe-empty/recipe-empty.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{
		path: 'shoppingList',
		component: ShoppingListComponent,
		children: [ { path: 'edit', component: ShoppingEditComponent } ]
	},
	{
		path: 'recipes',
		component: RecipesComponent,
		children: [ { path: '', component: RecipeEmptyComponent }, { path: ':id', component: RecipeDetailComponent } ]
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
