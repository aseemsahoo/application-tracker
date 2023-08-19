import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  showForm: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    // subscribe to the service to get notified of updates
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showForm = val));
  }

  ngOnInit(): void {}

  toggleForm(): void {
    // console.log('toggle boolean');
    // this will change the boolean value
    this.uiService.toggleForm();
    console.log(this.showForm);
  }
  ngOnDestroy(): void {
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }

  }
}
