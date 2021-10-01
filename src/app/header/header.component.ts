import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('recipies') recipies: ElementRef;
  @ViewChild('shoppingList') shoppingList: ElementRef;
  @Output() modeSelected = new EventEmitter<string>();
  constructor() { }

  onSetMode(mode: string) {
    console.log(mode)
    this.modeSelected.emit(mode);
  }
  ngOnInit(): void {
  }

}
