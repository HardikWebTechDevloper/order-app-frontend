import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-crypto-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss'],
})
export class VbCryptoCryptoListComponent implements OnInit {
  selectedItem: String = 'btc'
  constructor() {}
  ngOnInit() {}
}
