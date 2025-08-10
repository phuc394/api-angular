import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DragonBall} from '../../../services/dragon-ball/dragon-ball';
import {CharacterItemModel} from '../../models/charactersitem.models';
import {Observable, Subscription} from 'rxjs';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardImage,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail implements OnInit {
  characterDetail!: CharacterItemModel;
  characterDetail$: Observable<CharacterItemModel>;
  subscription: Subscription[] = [];
  constructor(private activateRoute: ActivatedRoute, private dragonBallService: DragonBall, private router: Router) {
    let {id} = this.activateRoute.snapshot.params;
    this.characterDetail$ = this.dragonBallService.getCharacterDetail(id);

    }
  ngOnInit() {
    this.subscription.push(
      this.characterDetail$.subscribe((character:CharacterItemModel) => {
        if (character.id) {
          this.characterDetail = character;
          console.log(this.characterDetail)
        }
      })
    );
  }
  navigatetoHome() {
    this.router.navigate(['/']).then();
  }
}




