import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'az-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  /**
   *
   */
  @Input()
  isCollapsed!: boolean;

  /**
   *
   */
  @Output()
  isCollapsedChange = new EventEmitter<boolean>();

  isDark = false;

  /**
   *
   */
  constructor() {}

  /**
   *
   */
  ngOnInit(): void {
    this.isDark = localStorage.getItem('theme') === 'true';
  }

  /**
   *
   */
  changeColapsed(): void {
    this.isCollapsedChange.emit(!this.isCollapsed);
  }
}
