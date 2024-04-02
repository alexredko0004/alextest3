import { test, expect, chromium, testInfo} from '@playwright/test';

test.beforeEach('', async ({page})=>{
//   //make viewed items history to display only GTA V
  await page.route('https://www.kaggle.com/api/i/users.RecentlyViewedService/GetRecentlyViewedItems', async route =>{
    const json = {
      "recentlyViewedItems": [
          {
              "title": "Grand Theft Auto V",
              "url": "/datasets/noahx1/grand-theft-auto-v",
              "itemType": "DATASET",
              "authorSlug": "/noahx1",
              "mostRecentView": "2024-03-17T17:23:54Z",
              "thumbnailUrl": "https://storage.googleapis.com/kaggle-datasets-images/4387661/7533339/6e5fc9c16320e83821cc2494a380cee5/dataset-thumbnail.jpg?t=2024-02-01-19-54-36",
              "id": 4387661
          }
      ]
  }
    await route.fulfill({json})
  })
  //apply dark theme
  await page.route('https://www.kaggle.com/api/i/users.UsersService/GetCurrentUserTheme', async route => {
      const json = {
        "theme": "THEME_DARK"
    }
    await route.fulfill({ json });
  });
  
  //change name some stats on home page
  await page.route('https://www.kaggle.com/api/i/users.HomePageService/GetHomePageStats', async route => {
      const json = {
        "datasets": {
            "totalCount": 200,
            "lastMonthCount": 123
        },
        "notebooks": {
            "totalCount": 100,
            "lastMonthCount": 50
        },
        "discussions": {},
        "competitions": {},
        "courses": {},
        "maxDayStreak": 111,
        "currentDayStreak": 40
    }
    await route.fulfill({ json });
  });
  await page.goto('https://www.kaggle.com/');
  await page.getByRole('button',{name:'Sign In'}).click();
  await page.getByText('Sign in with Email').click();
  await page.getByPlaceholder('Enter your email address or username').fill('illyastud2002@gmail.com');
  await page.getByRole('textbox',{name:'Password'}).fill('Test12345@');
  await page.keyboard.press('Enter');
})

//Test for mocked data
test('Mocked data',async ({page})=>{
  //verifying that current days streak value is mocked
  let currentStreakValue = await page.locator('.sc-hABBmJ gBXVCV,[style="margin-top: 36px;"]').first().innerText()
  expect (currentStreakValue).toEqual("40");
  //verifying that ctotal datasets value is mocked
  expect (await page.locator('h5').first().innerText()).toEqual("200");
  //verifying that dark mode is applied
  await page.goto('https://www.kaggle.com/settings');
  let selectedThemeAttribute = await page.locator('[role="combobox"]').getAttribute('aria-label');
  expect (selectedThemeAttribute).toEqual('Dark theme')
})
