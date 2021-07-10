import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-tabbed-3',
  templateUrl: './card-header-tabbed-3.component.html',
  styleUrls: ['./card-header-tabbed-3.component.scss'],
})
export class VbHeadersCardHeaderTabbed3Component implements OnInit {
  @Input() data: any = {
    title: 'With dropdown',
  }

  constructor() {}
  ngOnInit() {}
}
