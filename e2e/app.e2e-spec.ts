import { WeatherDemoJunePage } from './app.po';

describe('weather-demo-june App', () => {
  let page: WeatherDemoJunePage;

  beforeEach(() => {
    page = new WeatherDemoJunePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
