import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-footer-2',
  templateUrl: './card-footer-2.component.html',
  styleUrls: ['./card-footer-2.component.scss'],
})
export class VbHeadersCardFooter2Component implements OnInit {
  @Input() data: any = {
    mainTitle: 'Save',
    mainType: 'btn-primary',
    additionalTitle: 'Cancel',
  }

  constructor() {}
  ngOnInit() {}
}
