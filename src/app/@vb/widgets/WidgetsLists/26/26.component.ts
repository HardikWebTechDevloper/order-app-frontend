import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'vb-widgets-lists-26',
  templateUrl: './26.component.html',
})
export class VbList26Component implements OnInit {
  options: any = {}
  current = [
    {
      name: 'Level 1',
      expanded: true,
      children: [
        {
          name: 'Level 2',
          expanded: true,
        },
      ],
    },
    {
      name: 'Level 1',
      expanded: true,
      children: [{ name: 'Level 2' }, { name: 'Level 2' }, { name: 'Level 2' }],
    },
  ]

  constructor() {}
  ngOnInit() {}
}
