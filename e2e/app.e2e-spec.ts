import { Ng2BackendPage } from './app.po';

describe('ng2-backend App', () => {
  let page: Ng2BackendPage;

  beforeEach(() => {
    page = new Ng2BackendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
