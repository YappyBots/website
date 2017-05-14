import DocsSource from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs']);
const tagBlacklist = new Set([]);
export default new DocsSource({
  id: 'yappygithub',
  name: 'Yappy Github',
  global: 'Discord',
  repo: 'YappyBots/YappyGithub',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => !tagBlacklist.has(tag),
});
