const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add extra file extensions for asset bundling
config.resolver.assetExts.push('sqlite');

module.exports = config;
