import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent implements OnInit {

  constructor(public cartService: CartService ) { }

  ngOnInit() {
  }

}
