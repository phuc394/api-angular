import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {Observable, Subscription} from 'rxjs';
import {CharactersModel} from '../../models/characters.model';
import {CharacterItemModel} from '../../models/charactersitem.models';
import {DragonBall} from '../../../services/dragon-ball/dragon-ball';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  myData$!: Observable<CharactersModel>;
  subscription: Subscription[] = [];
  myCharacters: CharacterItemModel[] = [];
  constructor(private dragonBallService: DragonBall, private router: Router) {
    this.myData$ = this.dragonBallService.getData();
    console.log(this.myData$);
  }
  ngOnInit() {
    this.subscription.push(
      this.myData$.subscribe(data => {
        if (data.items.length > 0) {
          this.myCharacters = data.items;
        }

      })
    );
  }
  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/detail', id]).then(); //
  }

}
