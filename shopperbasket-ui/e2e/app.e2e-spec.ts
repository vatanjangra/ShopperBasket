import { ShopperbasketUiPage } from './app.po';

describe('shopperbasket-ui App', () => {
  let page: ShopperbasketUiPage;

  beforeEach(() => {
    page = new ShopperbasketUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
