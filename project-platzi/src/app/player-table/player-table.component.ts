import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player';
import { TeamService } from './../services/team.service';
import { PlayerService, PlayersTableHeaders } from './../services/player.service';
import { take } from 'rxjs/operators';

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

  constructor(private playerService: PlayerService, private teamService: TeamService) {}

  ngOnInit() {
    this.players$ = this.playerService.getPlayers();
  }

  newPlayer() {
    this.showModal = true;
    this.selectedPlayer = null;
    setTimeout(() => {
      window.location.replace('#open-modal');
    }, 0);
  }

  editPlayer(player: Player) {
    this.selectedPlayer = { ...player };
    this.showModal = true;
    setTimeout(() => {
      window.location.replace('#open-modal');
    }, 0);
  }

  deletePlayer(player: Player) {
    console.log('deletePlayer player:::::', player);
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        console.log('deletePlayer teams:::::', teams);
        const modifiedPlayers = teams[0].players ? teams[0].players.filter((p: any) => p.key !== player.$key) : teams[0].players;
        console.log('deletePlayer modifiedPlayers:::::', modifiedPlayers);
        const formattedTeam = {
          ...teams[0],
          players: [...modifiedPlayers]
        };
        console.log('deletePlayer formattedTeam:::::', formattedTeam);
        this.playerService.deletePlayer(player.$key);
        this.teamService.editTeam(formattedTeam);
      });
  }

  closeDialog() {
    this.showModal = false;
  }
}
