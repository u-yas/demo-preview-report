
/**
 * @type {import('jest').Config}
 */
const config = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testMatch: [
    "<rootDir>/tests/**.ts"
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
  ]
}

module.exports = config