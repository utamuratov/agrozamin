import { Component } from '@angular/core';
import { Project } from '../../core/enums/Project.enum';
import { TranslationType } from '../../core/enums/translation-type.enum';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  /**
   *
   */
  isCollapsed = false;

  /**
   *
   */
  TranslationType = TranslationType;

  /**
   *
   */
  Project = Project;
}
