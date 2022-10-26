import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    email: new FormControl(),
    age: new FormControl(),
    salary: new FormControl()
  });


onButtonclicked(text: {email:string, age:string, salary:string} ) {

alert('user was successfully added to the database email: ' +text.email + ' age: ' + text.age+ ' salary: '  + text.salary);


}
}
