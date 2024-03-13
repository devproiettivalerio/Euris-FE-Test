import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-select',
  standalone: false,
  templateUrl: './theme-select.component.html',
  styleUrl: './theme-select.component.scss',
})
export class ThemeSelectComponent implements OnInit {
  public themes: any[] | undefined;

  public currentThemes: string | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {


  }
  ngOnInit(): void {
      this.currentThemes = localStorage.getItem('themeMode') ?? undefined;
    this.CheckTheme();
  }

  OnChangeThemes() {
    this.CheckTheme();
  }

  CheckTheme(){
    if (this.currentThemes == 'dark') {
      console.log(this.currentThemes);
      this.renderer.removeClass(this.document.body, 'dark');
      localStorage.setItem('themeMode', this.currentThemes);
      this.currentThemes = '';
    } else {
      this.renderer.addClass(this.document.body, 'dark');
      localStorage.setItem('themeMode', this.currentThemes ?? '');
      this.currentThemes = 'dark';
    }
  }
}
