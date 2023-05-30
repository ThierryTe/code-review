import { Pipe, PipeTransform } from '@angular/core';
import { Info } from '../models/info.model';

@Pipe({
  name: 'productDisplay'
})
export class ProductDisplayPipe implements PipeTransform {

  transform(info:Info): string {
    if (info.quantite < 10) {
      return `Commander le ${info.title}`;
    } else if (info.quantite >= 1) {
      let display = `${info.title} - Quantité: ${info.quantite}`;
      return display;
    } else {
      let display = `${info.commentaire}, ${info.materiaux}` 
      return display;
    }
  }
  }


