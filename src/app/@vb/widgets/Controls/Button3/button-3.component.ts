import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-controls-button-3',
  templateUrl: './button-3.component.html',
  styleUrls: ['./button-3.component.scss'],
})
export class VbControlsButton3Component implements OnInit {
  @Input() data: any = {
    mainTitle: 'Update',
    mainType: 'primary',
    additionalTitle: 'Cancel',
  }

  constructor() {}
  ngOnInit() {}
}
