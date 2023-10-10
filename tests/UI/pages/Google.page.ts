import { Locator, Page } from '@playwright/test';
import { BaseUI } from './BaseUI.page';

export default class Google extends BaseUI {
  //Locators
  protected searchBar: Locator;
  protected searchButton: Locator;
  protected searchLink: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBar = page.getByLabel('Search', { exact: true });
    this.searchButton = page.getByRole('button', { name: 'Google Search' });
    this.searchLink = page.getByRole('link', {
      name: 'Selenium Selenium https://www.selenium.dev',
    });
  }

  public async goTo(url: string) {
    await this.goToURL(url);
  }

  public async SearchByText(text: string) {
    await this.fillElement(this.searchBar, text);
  }

  public async TapSearchButton() {
    await this.tapElement(this.searchButton);
  }

  public async VerifyURL(text: string) {
    await this.verifyURLContains(text);
  }

  public async searchElementIsVisible() {
    await this.searchLink.isVisible();
    await this.tapElement(this.searchLink);
  }
}
