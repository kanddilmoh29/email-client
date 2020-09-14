import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EmailCreateComponent } from './inbox/email-create/email-create.component';
import { EmailReplyComponent } from './inbox/email-reply/email-reply.component';
import { EmailShowComponent } from './inbox/email-show/email-show.component';
import { EmailIndexComponent } from './inbox/email-index/email-index.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailShowComponent,
    EmailIndexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
