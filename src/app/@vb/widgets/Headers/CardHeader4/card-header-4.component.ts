import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header-4',
  templateUrl: './card-header-4.component.html',
  styleUrls: ['./card-header-4.component.scss'],
})
export class VbHeadersCardHeader4Component implements OnInit {
  @Input() data: any = {
    title: 'Basic page header',
    icon: 'fe fe-phone-call',
    description: 'Some description here...',
  }

  constructor() {}
  ngOnInit() {}
}
