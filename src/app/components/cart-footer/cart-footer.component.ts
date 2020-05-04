import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../models/cart-item';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
  styleUrls: ['./cart-footer.component.scss']
})
export class CartFooterComponent implements OnInit {

  private taxValue = 0;
  public comments = '';

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  checkout() {
    const data = {
      items: this.cartService.basket,
      subTotal: this.subTotal,
      tax: this.tax,
      total: this.total,
      comments: this.comments
    };
    this.cartService.checkout(data).subscribe();
  }

  get subTotal() { return this.cartService.basket.reduce((sum, item: CartItem) => (sum + item.price * item.quantity), 0); }
  get tax() { return this.subTotal * this.taxValue; }
  get total() { return this.subTotal - this.tax; }
}
