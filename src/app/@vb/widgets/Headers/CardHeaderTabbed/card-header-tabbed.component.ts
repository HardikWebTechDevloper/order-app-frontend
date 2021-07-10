import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-tabbed',
  templateUrl: './card-header-tabbed.component.html',
  styleUrls: ['./card-header-tabbed.component.scss'],
})
export class VbHeadersCardHeaderTabbedComponent implements OnInit {
  @Input() data: any = {
    title: 'Basic',
  }

  constructor() {}
  ngOnInit() {}
}
