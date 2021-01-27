import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';
import { DirectiveComponent} from '../directive/directive.component';
import { ItemListService } from '../service/item-list/item-list.service';
import { ItemListData } from '../model/item.list.data';
import { ItemData } from '../model/item.model';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})




export class DisplayListComponent implements OnInit {

  itemList: ItemData[];

  constructor(private listServ: ItemListService) {}

   
  ngOnInit() {
    this.listServ.getList().subscribe((data) => {
      this.itemList = data.itemList;
    });
  }

}
