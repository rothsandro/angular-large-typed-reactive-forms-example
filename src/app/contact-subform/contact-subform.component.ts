import { Component, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { defer, map, of, startWith } from 'rxjs';
import { User } from '../types/user.types';

@Component({
  selector: 'app-contact-subform',
  templateUrl: './contact-subform.component.html',
  styleUrls: ['./contact-subform.component.scss'],
})
export class ContactSubformComponent {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    github: this.fb.control<string | undefined>(undefined, {
      nonNullable: true,
    }),
  });

  @Input()
  set initialUser(user: User) {
    this.form.patchValue({
      email: user.email,
      github: user.github,
    });
  }

  @Output()
  valueChange = defer(() =>
    this.form.valueChanges.pipe(
      startWith(this.form.value),
      map(
        (formValue): Partial<User> => ({
          email: formValue.email,
          github: formValue.github || undefined,
        })
      )
    )
  );

  @Output()
  formReady = of(this.form);

  constructor(private fb: FormBuilder) {}
}
