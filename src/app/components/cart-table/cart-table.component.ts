import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {

  constructor(public cartService: CartService ) { }

  ngOnInit() {
    this.cartService.loadBasket().subscribe();
  }

  deleteItem(item) {
    this.cartService.deleteItem(item).subscribe();
  }

}
