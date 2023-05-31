import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Info } from '../models/info.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  url = 'https://api-privee/';


  constructor(private http: HttpClient) { }


 //Création de la fonction qui va permettre de retourner la liste des informations
  getInfo():Observable<Info[]>{

   return this.http.get<Info[]>(`${this.url}/info`)
}

// Fonction permettant d'envoyer une commande
commander(info:Info){
  return this.http.post(`${this.url}/envoyer-commande`,info)
}

// Fonction permettant d'annuler une commande
cancel(info:Info){
  return this.http.post(this.url + 'cancel-commande',info);

}

// Fonction permettant de relancer une commande
relance(info:Info){
  return this.http.post(`${this.url}/relance`,info);
}

}
