import { test, expect } from '@playwright/test';

test('Visual Regression Test', async ({ page }) => {
  const url = process.env.CHECK_URL;

  if (!url) {
    throw new Error('No URL provided in CHECK_URL environment variable.');
  }

  // const browserName = 'chromium'; // Or dynamically get this value from Playwright's browser instance
  // const platform = 'linux'; // Or dynamically get this value based on the environment

  const sanitizedUrl = url.replace(/https?:\/\//, '') // Remove protocol
                        .replace(/\./g, '-')       // Replace dots with hyphens
                        .replace(/\//g, '');       // Remove slashes

  // Navigate to the URL
  await page.goto(url);

  // Perform visual regression or other checks
  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot(`screenshot-${sanitizedUrl}.png`);
});


