import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-sofitukker',
  templateUrl: './sofitukker.component.html',
  styleUrls: ['./sofitukker.component.scss']
})
export class SofitukkerComponent implements OnInit {

  addPlayerForm = new FormGroup({
    playerName: new FormControl('',Validators.required),
    rings: new FormControl(''),
    jerseyNumber: new FormControl('', Validators.required),
    team: new FormControl('', Validators.required)
  })

  constructor() { }
  getPlayerData(){
    console.log(this.addPlayerForm.value)
    this.addPlayerForm.reset()
  }

  ngOnInit(): void {
  }

}
