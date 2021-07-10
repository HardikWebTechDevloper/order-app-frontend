import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class VbHeadersTagComponent implements OnInit {
  @Input() data: any = {
    title: 'Tag',
  }

  constructor() {}
  ngOnInit() {}
}
