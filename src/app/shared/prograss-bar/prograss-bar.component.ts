import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prograss-bar',
  templateUrl: './prograss-bar.component.html',
  styleUrls: ['./prograss-bar.component.sass']
})
export class PrograssBarComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;


  constructor() { }

  ngOnInit(): void {
  }

}
