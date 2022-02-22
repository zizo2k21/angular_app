import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { IChampion } from '../championlist/champions';
import { ChampionsService } from '../championlist/champions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-champion-edit',
  templateUrl: './champion-edit.component.html',
  styleUrls: ['./champion-edit.component.css'],
})
export class ChampionEditComponent implements OnInit {
  championForm!: FormGroup;
  champion: IChampion | any;

  constructor(
    private fb: FormBuilder,
    private championService: ChampionsService,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((param)=> {
      const {id} = param
      this.getCurrentChampion(id)
      console.log('Route parqm ',param);
      
    })
    this.championForm = this.fb.group({
      id: 0,
      tags: [],
      title: '',
      name: '',
      key: '',
    });

   
    console.log();
  }
  deleteChampion(champion: number){
    this.championService
    .deleteChampions(champion)
    .subscribe((chp) =>{
      console.log('current champion ',chp);
    this.router.navigate(['/championlist'])
    });
  }
  updateChampion(champion: IChampion){
    this.championService
    .updateChampions(champion)
    .subscribe((chp) =>{
      console.log('current champion ',chp);
    this.router.navigate(['/championlist'])
    });
  }
addChampion(champion: IChampion){
  this.championService.addChampions(champion).subscribe((chp)=>{
    console.log('champion ajouté', chp);
    this.router.navigate(['/championlist'])
  });

}
  getCurrentChampion(id: number){
    this.championService
    .getChampionById(id)
    .subscribe((chp) =>{
      console.log('current champion ',chp);
      this.champion=chp
      this.championForm.setValue(chp)
    });
  }
  validate() {
    console.log('Données du champion.....', this.championForm.value);

    this.addChampion(this.championForm.value)

    this.updateChampion( this.championForm.value)
  }
}
