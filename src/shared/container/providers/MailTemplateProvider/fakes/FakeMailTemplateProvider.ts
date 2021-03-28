import IMaitlTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMaitlTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
