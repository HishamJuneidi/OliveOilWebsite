import { Component, OnInit, Input } from '@angular/core';
import { ItemData } from '../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data: ItemData;

  constructor() { }

  ngOnInit() {
  }

}
