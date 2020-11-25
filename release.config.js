module.exports = {
  branches: ['main'],
  // FIXME: package.json
  repositoryUrl:
    'https://github.com/kuro-kuroite/tutorial-github-actions-course-react/',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'build.zip', label: 'Build' },
          { path: 'coverage.zip', label: 'Coverage' },
        ],
      },
    ],
  ],
};
