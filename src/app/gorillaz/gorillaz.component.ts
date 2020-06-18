import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-gorillaz',
  templateUrl: './gorillaz.component.html',
  styleUrls: ['./gorillaz.component.scss']
})
export class GorillazComponent implements OnInit {

  addartistBio = new FormGroup({
    bandName: new FormControl('',Validators.required),
    albumNumber: new FormControl(''),
    songNumber: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    biography: new FormControl('', Validators.required)
  })
  
  constructor(){ }
  getartistBio(){
    console.log(this.addartistBio.value)
    this.addartistBio.reset()
  }


  ngOnInit(): void {
  }

}
