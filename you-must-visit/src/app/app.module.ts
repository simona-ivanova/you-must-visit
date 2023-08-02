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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    CoreModule,
    UserModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
