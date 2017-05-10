import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs']);
export default new DocsSource({
  id: 'yappygithub',
  name: 'Yappy Github',
  global: 'Discord',
  repo: 'YappyBots/YappyGithub',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => semver.gte(tag.replace(/^v/, ''), '1'),
});
