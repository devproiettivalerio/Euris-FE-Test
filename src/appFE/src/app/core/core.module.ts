import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './services/auth-service.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    HttpClient,
    HttpClientModule,
    ActivatedRoute,
    provideHttpClient(),
    provideAnimationsAsync(),

    AuthService,
  ],
})
export class CoreModule {

}

/* Some utils */
export type FormGroupOf<T> = {
  [key in keyof T]: T[key] extends Array<infer TArray>
    ? FormArray<
        TArray extends object
          ? FormGroup<FormGroupOf<TArray>>
          : FormControl<TArray | null>
      >
    : T[key] extends object
    ? FormGroup<FormGroupOf<T[key]>>
    : FormControl<T[key] | null >;
};
