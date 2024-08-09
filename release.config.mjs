/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["main"],
  // extends: "semantic-release-npm-github-publish",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            type: "build",
            release: "patch",
          },
          {
            type: "ci",
            release: "patch",
          },
          {
            type: "chore",
            release: "patch",
          },
          {
            type: "docs",
            release: "patch",
          },
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "test",
            release: "patch",
          },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    // "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
