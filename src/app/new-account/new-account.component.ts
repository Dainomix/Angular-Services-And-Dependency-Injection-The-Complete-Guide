import { Component } from '@angular/core';
import { LoggingService } from "../logging.service";
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],  // Provides simply means we tell Angular how to create the it (LoggingService).
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService,
    private accountsService:AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

  /**
   * With Providers, Angular when analyzing the component, recognizes that it should be able to give us
   * such a loggingService and it will set itself up to be able to do so.
   * and when it then actually builds the component, constructs it, it sees that we want to have such an instance
   * and it will know how to give us such an instance
   */

}