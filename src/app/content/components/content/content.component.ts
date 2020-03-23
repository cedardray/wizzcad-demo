import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../shared/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() datas: Data;

  constructor() { }

  ngOnInit() {
  }

}
