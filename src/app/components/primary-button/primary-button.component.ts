import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  template: `
    <button (click)="handleButtonClick()" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
      {{ label }}
    </button>
  `,
  styles: []
})
export class PrimaryButtonComponent {
  @Input() label: string = '';
  @Output() buttonClicked = new EventEmitter();

  handleButtonClick() {
    this.buttonClicked.emit();
    console.log('Button clicked!');
  }
}
