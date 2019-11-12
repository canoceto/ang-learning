import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hme',
  templateUrl: './hme.component.html',
  styleUrls: ['./hme.component.css']
})
export class HmeComponent implements OnInit {

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  firstClick() {
    this.data.firstClick();
  }
}
