import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  visible = false;
  visibleSec = false;
  inputVisible = false;
  searchForm!: FormGroup;
  userName = 'Тимур';

  /**
   *
   */
  isDark = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: [null],
    });

    this.isDark = localStorage.getItem('theme') === 'true';
    this.addDeleteTheme(this.isDark);
  }

  clickMe(): void {
    this.visible = false;
    this.visibleSec = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  showInput() {
    this.inputVisible = true;
  }

  hideInput() {
    this.inputVisible = false;
  }

  submitForm() {
    if (this.searchForm.value['search']?.trim()) {
      console.log(2312);
    }
    this.hideInput();
  }

  switchTheme() {
    this.isDark = !this.isDark;
    this.addDeleteTheme(this.isDark);
    localStorage.setItem('theme', this.isDark.toString());
  }

  /**
   *
   */
  private addDeleteTheme(isDark: boolean) {
    if (isDark) {
      this.loadCss('dark.css', 'theme');
      return;
    }

    this.deleteTheme();
  }

  /**
   *
   * @param href
   * @param id
   * @returns
   */
  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = (document.getElementById(id) ??
        document.createElement('link')) as HTMLLinkElement;
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private deleteTheme(): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.getElementById('theme');
      style?.remove();
    });
  }
}
