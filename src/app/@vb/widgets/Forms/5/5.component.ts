import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-forms-5',
  templateUrl: './5.component.html',
  styleUrls: ['./5.component.scss'],
})
export class VbForms5Component implements OnInit {
  contentTypes = [
    { label: 'Text', value: 'Text', checked: true },
    { label: 'Video', value: 'Video' },
    { label: 'Image', value: 'Image' },
    { label: 'Vimeo', value: 'Vimeo' },
  ]

  categoriesTypes = [
    {
      label: 'Travel',
      value: 'travel',
    },
    {
      label: 'Lifestyle',
      value: 'lifestyle',
    },
  ]

  constructor() {}
  ngOnInit() {}
}
