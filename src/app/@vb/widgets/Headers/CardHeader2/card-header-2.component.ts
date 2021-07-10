import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-2',
  templateUrl: './card-header-2.component.html',
  styleUrls: ['./card-header-2.component.scss'],
})
export class VbHeadersCardHeader2Component implements OnInit {
  @Input() data: any = {
    title: 'With dropdown',
  }

  constructor() {}
  ngOnInit() {}
}
