import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeServie: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] ? true : false;
        this.initForm();
      }
    );
  }

  private initForm() {
    let rName = '';
    let rPath = '';
    let rDes = '';
    let rIng = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeServie.getRecipe(this.id);
      rName = recipe.name;
      rPath = recipe.imagePath;
      rDes = recipe.description;
      if (recipe.ingredients) {
        for (let ing of recipe.ingredients) {
          rIng.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
              unit: new FormControl(ing.unit, Validators.required)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(rName, Validators.required),
      'imagePath': new FormControl(rPath, Validators.required),
      'description': new FormControl(rDes, Validators.required),
      'ingredients': rIng
    });
  }
  addNewIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        unit: new FormControl(null, Validators.required)
      })
    );
  }
  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  onSubmit() {
    if (this.editMode) {
      this.recipeServie.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeServie.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
