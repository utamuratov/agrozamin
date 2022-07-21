import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutes } from './faq.routing';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { ConnectTelMailComponent } from './components/connect-tel-mail/connect-tel-mail.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    CommonModule,
    FaqRoutes,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzCollapseModule,
    NzIconModule,
    NzGridModule,
    NzFormModule
  ],
  declarations: [FaqComponent, QuestionsComponent, AddQuestionComponent, ConnectTelMailComponent]
})
export class FaqModule { }
