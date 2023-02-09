export const types = [
  { type: 'feat', section: 'Features' },
  { type: 'fix', section: 'Fixes and improvements' },
  { type: 'perf', section: 'Fixes and improvements' },
  { type: 'chore', section: 'Miscellaneous' },
  { type: 'docs', section: 'Miscellaneous' },
  { type: 'style', section: 'Miscellaneous' },
  { type: 'refactor', section: 'Miscellaneous' },
  { type: 'test', section: 'Miscellaneous' },
  { type: 'ci', section: 'Miscellaneous' },
  { type: 'build', section: 'Miscellaneous' },
]
export const issuePrefixes = ['MYG-']
export const issueUrlFormat = 'https://ltvofficial.atlassian.net/browse/MYG-{{id}}'
export const commitUrlFormat = '{{host}}/{{owner}}/{{repository}}/commits/{{hash}}'
export const compareUrlFormat =
  '{{host}}/{{owner}}/{{repository}}/branches/compare/{{currentTag}}%0D{{previousTag}}'
export const releaseCommitMessageFormat = 'chore(release): {{currentTag}}'
export const bumpFiles = ['package.json']
export const packageFiles = ['package.json']
