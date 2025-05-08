import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
   <button (click)="handleButtonClick()" class= "text-black font-bold py-2 px-4 border rounded focus:outline-none focus:shadow-outline">
      {{ label }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() label: string = '';
  @Output() buttonClicked = new EventEmitter();

  handleButtonClick() {
    this.buttonClicked.emit();
    console.log('Button clicked!');
  }
}
