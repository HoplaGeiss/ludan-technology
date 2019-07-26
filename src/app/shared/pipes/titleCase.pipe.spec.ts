import { TitleCasePipe } from './titleCase.pipe';

fdescribe('titleCasePipe', () => {
  let pipe: TitleCasePipe;

  beforeEach(() => {
    pipe = new TitleCasePipe();
  });

  it('works with _ as separator', () => {
    expect(pipe.transform('hello_you', '_')).toBe('Hello You');
  });

  it('works with | as separator', () => {
    expect(pipe.transform('hello|you', '|')).toBe('Hello You');
  });

  it('works with random uppercase', () => {
    expect(pipe.transform('HELLo|yOu', '|')).toBe('Hello You');
  });

  it('works with no separator', () => {
    expect(pipe.transform('HELLo yOu')).toBe('Hello You');
  });
});
