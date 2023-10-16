import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() changeInputText: EventEmitter<string> = new EventEmitter();
  text:string="";
  onChangeInputText() {
    this.text=document.getElementsByTagName('input')[0].value;
    console.log(this.text);
    this.changeInputText.emit(this.text);
  };
}
