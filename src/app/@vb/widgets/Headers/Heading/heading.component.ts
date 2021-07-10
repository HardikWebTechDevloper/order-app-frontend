import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class VbHeadersHeadingComponent implements OnInit {
  @Input() data: any = {
    title: 'Basic page header',
  }

  constructor() {}
  ngOnInit() {}
}
