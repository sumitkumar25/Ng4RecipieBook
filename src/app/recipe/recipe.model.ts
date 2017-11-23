import { Ingrediant } from '../common/ingrediant.model';

/**
 * Created by sukumar on 15-10-2017.
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingrediant[];

  constructor(name: string, desc: string, path: string, ingredients: Ingrediant[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients = ingredients;
  }
}
