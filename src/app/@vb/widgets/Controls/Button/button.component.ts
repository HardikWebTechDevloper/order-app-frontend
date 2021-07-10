import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'vb-controls-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class VbControlsButtonComponent implements OnInit {
  @Input() data: any = {
    title: 'Save',
    type: 'primary',
  }

  constructor() {}
  ngOnInit() {}
}
