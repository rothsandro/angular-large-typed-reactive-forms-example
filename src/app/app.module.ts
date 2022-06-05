import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NameSubformComponent } from './name-subform/name-subform.component';
import { ContactSubformComponent } from './contact-subform/contact-subform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    NameSubformComponent,
    ContactSubformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useFactory: (): MatFormFieldDefaultOptions => ({
        appearance: 'outline',
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
