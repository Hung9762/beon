import { test, Page } from '@playwright/test';
import Google from '../pages/google.page';

test.describe('Beon Code Interview', () => {
  let google: Google;
  test.beforeEach(({ page, context }) => {
    google = new Google(page);
  });

  test('Challenge @HappyPath', async () => {
    await google.goTo('/');
    await google.SearchByText('Selenium');
    await google.TapSearchButton();
    //await google.VerifyURL('selenium');
    await google.searchElementIsVisible();
  });
});
