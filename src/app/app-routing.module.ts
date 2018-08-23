import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }            from './components/home/home.component';
import { ProjectsComponent }        from './components/projects/projects.component';
import { ResumeComponent }          from './components/resume/resume.component';
import { CertificationsComponent }  from './components/certifications/certifications.component';
import { DemosComponent }            from './components/demos/demos.component';

const routes: Routes = [
    {
        path: 'demos',
        component: DemosComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'certifications',
        component: CertificationsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
