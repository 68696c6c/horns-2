module.exports = {
  name: 'horns',
  verbose: true,
  setupFiles: ['<rootDir>/test/setup.jsx'],
  testPathIgnorePatterns: ['.cache', 'dist'],
  snapshotSerializers: ['jest-emotion'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/assets-transformer.js',
    '\\.(css|less)$': '<rootDir>/test/assets-transformer.js',
    '^setup-test$': '<rootDir>/test/setup.jsx',
  },
}
