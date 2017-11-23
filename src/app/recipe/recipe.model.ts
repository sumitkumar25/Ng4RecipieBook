/**
 * Created by sukumar on 15-10-2017.
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, path: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
  }
}
