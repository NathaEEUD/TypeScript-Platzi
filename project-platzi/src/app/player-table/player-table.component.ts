import { PlayerService, PlayersTableHeaders } from './../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  public players$: Observable<Player[]>;
  public playersTableHeaders = PlayersTableHeaders;
  public selectedPlayer: Player;
  public showModal = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players$ = this.playerService.getPlayers();
  }

  newPlayer() {
    this.showModal = true;
    this.selectedPlayer = null;
    setTimeout(() => {
      window.location.replace('#open');
    }, 0);
  }
}
