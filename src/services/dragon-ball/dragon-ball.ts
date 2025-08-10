import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersModel} from '../../app/models/characters.model';
import {CharacterItemModel} from '../../app/models/charactersitem.models';

@Injectable({
  providedIn: 'root'
})
export class DragonBall {
      myUrl = "https://dragonball-api.com/api/characters?page=1&limit=58";
      constructor(private http: HttpClient) {

      }

      getData() {
        return this.http.get<CharactersModel>(this.myUrl);
      }

      getCharacterDetail(id: string) {
        return this.http.get<CharacterItemModel>(`https://dragonball-api.com/api/characters/${id}`);
      }
}
