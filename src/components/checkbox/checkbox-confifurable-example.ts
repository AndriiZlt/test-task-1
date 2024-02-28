import { Component } from '@angular/core';

/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-component',
  templateUrl: './checkbox-configurable-example.html',
  styleUrls: ['./checkbox-configurable-example.scss'],
})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
