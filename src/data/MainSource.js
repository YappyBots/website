import DocsSource from './DocsSource';

const branchBlacklist = new Set(['gh-pages', 'gh-pages-dev', 'docs']);
const tagBlacklist = new Set([]);
export default new DocsSource({
  id: 'yappygitlab',
  name: 'Yappy GitLab',
  global: 'Discord',
  repo: 'YappyBots/YappyGitLab',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch),
  tagFilter: tag => !tagBlacklist.has(tag),
});
