import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hme',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HmeComponent implements OnInit {


  constructor(private data: DataService) {
  }

  ngOnInit() {  
  }
}
