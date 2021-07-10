import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class VbHeadersCardHeaderComponent implements OnInit {
  @Input() data: any = {
    title: 'Basic header',
  }

  constructor() {}
  ngOnInit() {}
}
