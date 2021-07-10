import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-crypto-crypto-orders',
  templateUrl: './crypto-orders.component.html',
  styleUrls: ['./crypto-orders.component.scss'],
})
export class VbCryptoCryptoOrdersComponent implements OnInit {
  orderBookBuy = [
    {
      key: 1,
      sum: '3.3187',
      total: '3.0801',
      size: '479.021',
      ask: '0.00643000',
    },
    {
      key: 2,
      sum: '2.3187',
      total: '3.3536',
      size: '236.021',
      ask: '0.00267789',
    },
    {
      key: 3,
      sum: '3.3187',
      total: '3.3267',
      size: '236.021',
      ask: '0.00643670',
    },
    {
      key: 4,
      sum: '4.3187',
      total: '3.24727',
      size: '637.021',
      ask: '0.00267000',
    },
    {
      key: 5,
      sum: '5.3187',
      total: '3.272',
      size: '15.021',
      ask: '0.00333000',
    },
    {
      key: 6,
      sum: '6.3187',
      total: '3.2727',
      size: '62.021',
      ask: '0.00643667',
    },
    {
      key: 7,
      sum: '7.3187',
      total: '3.4778',
      size: '23.021',
      ask: '0.00647873',
    },
    {
      key: 8,
      sum: '5.3187',
      total: '3.8549',
      size: '2356.021',
      ask: '0.00643478',
    },
    {
      key: 9,
      sum: '9.3187',
      total: '3.35738',
      size: '125.021',
      ask: '0.00477000',
    },
    {
      key: 10,
      sum: '10.3187',
      total: '3.37',
      size: '234.021',
      ask: '0.00236000',
    },
    {
      key: 11,
      sum: '11.3187',
      total: '3.3883',
      size: '456.021',
      ask: '0.00674440',
    },
    {
      key: 12,
      sum: '5.3187',
      total: '3.8549',
      size: '2356.021',
      ask: '0.00643478',
    },
    {
      key: 13,
      sum: '9.3187',
      total: '3.35738',
      size: '125.021',
      ask: '0.00477000',
    },
    {
      key: 14,
      sum: '10.3187',
      total: '3.37',
      size: '234.021',
      ask: '0.00236000',
    },
    {
      key: 15,
      sum: '11.3187',
      total: '3.3883',
      size: '456.021',
      ask: '0.00674440',
    },
  ]
  orderBookSell = [
    {
      key: 1,
      sum: '3.3187',
      total: '3.0801',
      size: '479.021',
      bid: '0.00643000',
    },
    {
      key: 2,
      sum: '2.3187',
      total: '3.3536',
      size: '236.021',
      bid: '0.00267789',
    },
    {
      key: 3,
      sum: '3.3187',
      total: '3.3267',
      size: '236.021',
      bid: '0.00643670',
    },
    {
      key: 4,
      sum: '4.3187',
      total: '3.24727',
      size: '637.021',
      bid: '0.00267000',
    },
    {
      key: 5,
      sum: '5.3187',
      total: '3.272',
      size: '15.021',
      bid: '0.00333000',
    },
    {
      key: 6,
      sum: '6.3187',
      total: '3.2727',
      size: '62.021',
      bid: '0.00643667',
    },
    {
      key: 7,
      sum: '7.3187',
      total: '3.4778',
      size: '23.021',
      bid: '0.00647873',
    },
    {
      key: 8,
      sum: '5.3187',
      total: '3.8549',
      size: '2356.021',
      bid: '0.00643478',
    },
    {
      key: 9,
      sum: '9.3187',
      total: '3.35738',
      size: '125.021',
      bid: '0.00477000',
    },
    {
      key: 10,
      sum: '10.3187',
      total: '3.37',
      size: '234.021',
      bid: '0.00236000',
    },
    {
      key: 11,
      sum: '11.3187',
      total: '3.3883',
      size: '456.021',
      bid: '0.00674440',
    },
    {
      key: 12,
      sum: '5.3187',
      total: '3.8549',
      size: '2356.021',
      bid: '0.00643478',
    },
    {
      key: 13,
      sum: '9.3187',
      total: '3.35738',
      size: '125.021',
      bid: '0.00477000',
    },
    {
      key: 14,
      sum: '10.3187',
      total: '3.37',
      size: '234.021',
      bid: '0.00236000',
    },
    {
      key: 15,
      sum: '11.3187',
      total: '3.3883',
      size: '456.021',
      bid: '0.00674440',
    },
  ]

  actionType: String = 'buy'
  orderType: String = 'limit'
  timeInForce: String = 'good'

  constructor() {}
  ngOnInit() {}
}
