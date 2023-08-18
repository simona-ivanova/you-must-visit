import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsListComponent,
    HomeComponent,
    SanitizeHtmlPipe,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    CoreModule,
    UserModule,
    PostModule,
    AppRoutingModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
