import { PhonecatHybridPage } from './app.po';

describe('phonecat-hybrid App', () => {
  let page: PhonecatHybridPage;

  beforeEach(() => {
    page = new PhonecatHybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
