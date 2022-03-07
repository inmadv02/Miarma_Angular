import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    fullname: new FormControl(''),
    nickname: new FormControl(''),
    avatar: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    visibilidad: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  /*upload(event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar')!.updateValueAndValidity()
  }

  submit() {
    var formData: any = new FormData();
    formData.append("img", this.form.get('img').value);

    this.http.post(this.API, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
*/
}
