import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../shared/link';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() links: Link;
  @Output() goTo = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  previous(){
    this.goTo.emit(this.links.prev._page);
  }

  next(){
    this.goTo.emit(this.links.next._page);
  }

}
