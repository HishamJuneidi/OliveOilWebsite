import { Injectable } from '@angular/core';
import { ItemListData } from 'src/app/model/item.list.data';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  //TODO: Connect this to backend
  itemList: ItemListData;

  constructor(private client: HttpClient) { }

  getList(): Observable<ItemListData> {
    return this.client.get<ItemListData>('assets/testItemList.json'); 
  }

}
