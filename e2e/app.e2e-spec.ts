import { AngularAdvancedPage } from './app.po';

describe('angular-advanced App', () => {
  let page: AngularAdvancedPage;

  beforeEach(() => {
    page = new AngularAdvancedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
