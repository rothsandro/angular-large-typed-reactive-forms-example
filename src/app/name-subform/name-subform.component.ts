import { Component, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { defer, map, of, startWith } from 'rxjs';
import { User } from '../types/user.types';

@Component({
  selector: 'app-name-subform',
  templateUrl: './name-subform.component.html',
  styleUrls: ['./name-subform.component.scss'],
})
export class NameSubformComponent {
  form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  @Input()
  set initialUser(user: User) {
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }

  @Output()
  valueChange = defer(() =>
    this.form.valueChanges.pipe(
      startWith(this.form.value),
      map(
        (formValue): Partial<User> => ({
          firstName: formValue.firstName,
          lastName: formValue.lastName,
        })
      )
    )
  );

  @Output()
  formReady = of(this.form);

  constructor(private fb: FormBuilder) {}
}
