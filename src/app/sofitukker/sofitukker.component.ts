import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-sofitukker',
  templateUrl: './sofitukker.component.html',
  styleUrls: ['./sofitukker.component.scss']
})
export class SofitukkerComponent implements OnInit {

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
