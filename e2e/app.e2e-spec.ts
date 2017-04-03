import { PhoteriaNewPage } from './app.po';

describe('photeria-new App', () => {
  let page: PhoteriaNewPage;

  beforeEach(() => {
    page = new PhoteriaNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
