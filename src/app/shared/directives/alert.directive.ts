import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  @HostBinding('class.-green') green = false;
  @HostBinding('class.-orange') orange = false;
  @HostBinding('class.-blue') blue = false;

  @Input()
  set appAlert(status: number) {
    if (status === 1) {
      this.green = true;
    } else if (status === -1) {
      this.blue = true;
    } else {
      this.orange = true;
    }
  }


}
