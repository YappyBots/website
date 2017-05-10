import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs']);
export default new DocsSource({
  id: 'yappygitlab',
  name: 'Yappy GitLab',
  global: 'Discord',
  repo: 'YappyBots/YappyGitLab',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => semver.gte(tag.replace(/^v/, ''), '1'),
});
