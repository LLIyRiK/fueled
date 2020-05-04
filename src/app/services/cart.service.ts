import { Injectable } from '@angular/core';
import {CartItem} from '../models/cart-item';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private fakeItems: CartItem[] = [
    {
      name: 'Jet ski',
      price: 1500,
      quantity: 1,
      imgUrl: 'https://cdnmedia.endeavorsuite.com/images/catalogs/19213/products/detail/c3d6a1cb-1885-44d0-9ea4-7d88ef3fc29e.jpg',
      id: 434556256
    },
    {
      name: 'Bubble wrap',
      price: 440,
      quantity: 1,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41%2BLqOngD0L._SX466_.jpg',
      id: 345245865
    },
    {
      name: 'Crock-pot',
      price: 55,
      quantity: 1,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._SX466_.jpg',
      id: 987123654
    }
  ];

  private cartItems: CartItem[] = [];

  constructor() { }

  public loadBasket(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.fakeItems);
      observer.complete();
    }).pipe(tap((i: CartItem[]) => this.cartItems = i));
  }

  public deleteItem(item) {
    return new Observable((observer) => {
      observer.next(item);
      observer.complete();
    }).pipe(tap((i: CartItem) => {
      this.cartItems = this.cartItems.filter((ci: CartItem) => ci.id !== item.id);
    }));
  }

  public checkout(data) {
    return new Observable((observer) => {
      console.log(data);
      observer.complete();
    }).pipe(tap(() => {
      this.cartItems = [];
    }));
  }

  public get  basket() { return this.cartItems; }
}
