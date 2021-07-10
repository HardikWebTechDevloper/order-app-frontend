import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-tabbed-2',
  templateUrl: './card-header-tabbed-2.component.html',
  styleUrls: ['./card-header-tabbed-2.component.scss'],
})
export class VbHeadersCardHeaderTabbed2Component implements OnInit {
  @Input() data: any = {
    title: 'Pills',
  }

  constructor() {}
  ngOnInit() {}
}
