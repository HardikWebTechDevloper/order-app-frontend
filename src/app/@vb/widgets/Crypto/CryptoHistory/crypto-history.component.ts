import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-crypto-crypto-history.',
  templateUrl: './crypto-history.component.html',
  styleUrls: ['./crypto-history.component.scss'],
})
export class VbCryptoCryptoHistoryComponent implements OnInit {
  marketHistoryData = [
    {
      key: 1,
      orderDate: '20:11:25',
      type: 'SELL',
      bidAsk: '6709.00000000',
      unitsTotal: '0.00050000',
      totalCost: '3.35510106',
    },
    {
      key: 2,
      orderDate: '20:26:52',
      type: 'BUY',
      bidAsk: '6709.00000000',
      unitsTotal: '7.00050000',
      totalCost: '32.35510106',
    },
    {
      key: 3,
      orderDate: '20:31:12',
      type: 'BUY',
      bidAsk: '6709.00000000',
      unitsTotal: '0.00050000',
      totalCost: '3.35510106',
    },
    {
      key: 4,
      orderDate: '20:44:41',
      type: 'SELL',
      bidAsk: '6809.00000000',
      unitsTotal: '2.00050000',
      totalCost: '90.35510106',
    },
    {
      key: 5,
      orderDate: '20:47:25',
      type: 'SELL',
      bidAsk: '6709.00000000',
      unitsTotal: '0.00050000',
      totalCost: '3.35510106',
    },
    {
      key: 6,
      orderDate: '20:56:45',
      type: 'SELL',
      bidAsk: '6709.00000000',
      unitsTotal: '0.00050000',
      totalCost: '3.35510106',
    },
  ]
  constructor() {}
  ngOnInit() {}
}
