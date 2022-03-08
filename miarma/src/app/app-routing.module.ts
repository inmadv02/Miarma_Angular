import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: PostsListComponent},
    { path: 'admin', component: UserListsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }