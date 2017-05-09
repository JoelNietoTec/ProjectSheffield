import { ProjectSheffieldPage } from './app.po';

describe('project-sheffield App', () => {
  let page: ProjectSheffieldPage;

  beforeEach(() => {
    page = new ProjectSheffieldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
