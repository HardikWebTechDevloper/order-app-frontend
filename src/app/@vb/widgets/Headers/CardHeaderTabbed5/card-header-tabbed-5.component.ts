import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-tabbed-5',
  templateUrl: './card-header-tabbed-5.component.html',
  styleUrls: ['./card-header-tabbed-5.component.scss'],
})
export class VbHeadersCardHeaderTabbed5Component implements OnInit {
  @Input() data: any = {
    title: 'With icon',
    icon: 'fe fe-activity',
  }

  constructor() {}
  ngOnInit() {}
}
