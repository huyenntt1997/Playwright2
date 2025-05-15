import { expect, Page } from '@playwright/test';
import { aboutPageUI } from '../interfaces/aboutPageUI';

export class AboutActions {
  constructor(private page: Page) {
    this.page = page;
  }

}