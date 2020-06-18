import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-artistbio',
  templateUrl: './artistbio.component.html',
  styleUrls: ['./artistbio.component.scss']
})
export class ArtistbioComponent implements OnInit {

constructor() { }



  artists: string[] = ["Sofi Tukker", "The Black Keys", "Jimmy Hendrix", "Gorillaz", "The White Stripes"]

  ngOnInit(): void {
  }

}
