import { Ingrediant } from '../common/ingrediant.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingService {
    private ingrediants: Ingrediant[] = [new Ingrediant('ingredient 1', 10, 'mg'),
    new Ingrediant('ingredient 2', 5, 'mg'), new Ingrediant('ingredient 3', 7, 'mg')];
    ingrediantsChanged = new Subject<Ingrediant[]>();
    ingredientEdited = new Subject<number>();
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
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
    loadForEditing(index: number) {
        this.ingredientEdited.next(index);
    }
    getIngredient(index: number) {
        return this.ingrediants[index];
    }
    updateIngredient(index: number, ing: Ingrediant) {
        this.ingrediants[index] = ing;
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
    deleteItem(index: number) {
        this.ingrediants.splice(index, 1);
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
}
