import { OnlineBareillyPage } from './app.po';

describe('online-bareilly App', () => {
  let page: OnlineBareillyPage;

  beforeEach(() => {
    page = new OnlineBareillyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
