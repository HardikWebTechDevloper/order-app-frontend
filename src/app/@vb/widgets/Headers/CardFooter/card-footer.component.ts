import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-headers-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class VbHeadersCardFooterComponent implements OnInit {
  @Input() data: any = {
    mainTitle: 'Unlock Account',
    mainIcon: 'fe fe-lock',
    mainType: 'btn-success',
    additionalTitle: 'Cancel',
  }

  constructor() {}
  ngOnInit() {}
}
