import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-crypto-crypto-load-table',
  templateUrl: './crypto-load-table.component.html',
  styleUrls: ['./crypto-load-table.component.scss'],
})
export class VbCryptoCryptoLoadTableComponent implements OnInit {
  orderHistoryLoaded: Boolean = false
  orderHistoryLoading: Boolean = false
  myOpenOrdersData = [
    {
      key: 1,
      orderDate: '2018/05/27 20:55:39',
      openDate: '2018/05/27 20:55:39',
      type: 'SELL',
      bidAsk: '7319.44600000',
      filled: '0.26510202',
      unitsTotal: '0.26510202',
      actualRate: '7325.77049148',
      estTotal: '1937.22136398',
    },
    {
      key: 2,
      orderDate: '2018/05/24 09:28:04',
      openDate: '2018/05/24 09:27:11',
      type: 'BUY',
      bidAsk: '7660.00000000',
      filled: '0.29959731',
      unitsTotal: '0.29959731',
      actualRate: '7660.00000000',
      estTotal: '-2300.65268307',
    },
    {
      key: 3,
      orderDate: '2018/05/18 20:21:08',
      openDate: '2018/05/18 20:21:08',
      type: 'SELL',
      bidAsk: '8121.00000001',
      filled: '0.28400674',
      unitsTotal: '0.28400674',
      actualRate: '8121.00000000',
      estTotal: '2300.65268871',
    },
  ]
  constructor() {}
  ngOnInit() {}

  handleLoadOrderHistory() {
    this.orderHistoryLoading = true
    setTimeout(() => {
      this.orderHistoryLoading = false
      this.orderHistoryLoaded = true
    }, 1500)
  }
}
