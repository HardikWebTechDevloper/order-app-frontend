import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-heading-2',
  templateUrl: './heading-2.component.html',
  styleUrls: ['./heading-2.component.scss'],
})
export class VbHeadersHeading2Component implements OnInit {
  @Input() data: any = {
    title: 'Header with description',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  }

  constructor() {}
  ngOnInit() {}
}
