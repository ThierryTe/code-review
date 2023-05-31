import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { map } from 'rxjs/operators';
import { Info } from '../models/info.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-produit',
  templateUrl: './display-produit.component.html',
  styleUrls: ['./display-produit.component.scss']
})
export class DisplayProduitComponent implements OnInit {

color= 'red'
infos$!: Observable<Info[]>;
  infos: Info[] = [];
  constructor(private produitService:ProduitService){
  }

  ngOnInit(): void {
    this.getInfo();
  }


  // Appel de la fonction pour lister les informations depuis produitservice
getInfo(){
  this.infos$ = this.produitService.getInfo();
}
// Appel de la fonction pour commander un produit depuis produitservice
  command(info:Info){
    this.produitService.commander(info).pipe(
      map(data =>{
        console.log("Produit commandé");
      })
    )
  }
// Appel de la fonction pour annuler un produit depuis produitservice
  cancel(info: Info){
    this.produitService.cancel(info).pipe(
      map(data =>{
        console.log("Porduit annuler");
      })
    )
  }
// Appel de la fonction pour relancer un produit depuis produitservice
  relancer(info:Info){
    this.produitService.relance(info).pipe(
      map(data =>{
        console.log("Produit relancé");
      })
    )
  }

}
