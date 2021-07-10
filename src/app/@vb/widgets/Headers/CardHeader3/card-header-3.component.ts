import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-3',
  templateUrl: './card-header-3.component.html',
  styleUrls: ['./card-header-3.component.scss'],
})
export class VbHeadersCardHeader3Component implements OnInit {
  @Input() data: any = {
    title: 'With actions',
  }

  constructor() {}
  ngOnInit() {}
}
