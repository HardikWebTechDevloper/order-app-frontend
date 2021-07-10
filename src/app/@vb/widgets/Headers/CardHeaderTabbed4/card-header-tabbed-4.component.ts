import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-tabbed-4',
  templateUrl: './card-header-tabbed-4.component.html',
  styleUrls: ['./card-header-tabbed-4.component.scss'],
})
export class VbHeadersCardHeaderTabbed4Component implements OnInit {
  @Input() data: any = {
    title: 'Bold border',
  }

  constructor() {}
  ngOnInit() {}
}
