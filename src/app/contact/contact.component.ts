import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });

  submitForm(contactForm: FormGroup) {
    if (
      contactForm.controls.name.errors ||
      contactForm.controls.email.errors ||
      contactForm.controls.subject.errors ||
      contactForm.controls.message.errors
    ) {
      if (contactForm.controls.name.errors) {
        $('.name-input').removeClass('is-valid');
        $('.name-input').addClass('is-invalid');
      } else {
        $('.name-input').removeClass('is-invalid');
        $('.name-input').addClass('is-valid');
      }
  
      if (contactForm.controls.email.errors) {
        $('.email-input').removeClass('is-valid');
        $('.email-input').addClass('is-invalid');
      } else {
        $('.email-input').removeClass('is-invalid');
        $('.email-input').addClass('is-valid');
      }
  
      if (contactForm.controls.subject.errors) {
        $('.subject-input').removeClass('is-valid');
        $('.subject-input').addClass('is-invalid');
      } else {
        $('.subject-input').removeClass('is-invalid');
        $('.subject-input').addClass('is-valid');
      }
  
      if (contactForm.controls.message.errors) {
        $('.message-area').removeClass('is-valid');
        $('.message-area').addClass('is-invalid');
      } else {
        $('.message-area').removeClass('is-invalid');
        $('.message-area').addClass('is-valid');
      }
    } else {
      console.log("Thank you for contacting us")
      $(".contact-form").html('<div class="alert alert-success" style="background-color: #75ce85;color: #fff;padding-top:20px;padding-bottom:20px">Your message has been sent successfully.</div>')
    }

    
  }

  ngOnInit(): void {}
}
