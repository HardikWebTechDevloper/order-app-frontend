import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-5',
  templateUrl: './card-header-5.component.html',
  styleUrls: ['./card-header-5.component.scss'],
})
export class VbHeadersCardHeader5Component implements OnInit {
  @Input() data: any = {
    title: 'Borderless',
  }

  constructor() {}
  ngOnInit() {}
}
