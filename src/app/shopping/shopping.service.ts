import { Ingrediant } from '../common/ingrediant.model';
import { EventEmitter } from '@angular/core';
export class ShoppingService {
    private ingrediants: Ingrediant[] = [new Ingrediant('ingredient 1', 10, 'mg'),
    new Ingrediant('ingredient 2', 5, 'mg'), new Ingrediant('ingredient 3', 7, 'mg')];
    ingrediantsChanged = new EventEmitter<Ingrediant[]>();

    getIngredients() {
        return this.ingrediants.slice();
    }

    addIngredient(ing: Ingrediant) {
        this.ingrediants.push(ing);
        this.emitIngredientsChanged();
    }
    addIngredients(ings: Ingrediant[]) {
        this.ingrediants.push(...ings);
        this.emitIngredientsChanged();
    }
    emitIngredientsChanged() {
        this.ingrediantsChanged.emit(this.ingrediants.slice());
    }
}
