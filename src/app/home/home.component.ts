import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-hme',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HmeComponent implements OnInit {

  users: object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  firstClick() {
    this.data.firstClick();
  }
}
