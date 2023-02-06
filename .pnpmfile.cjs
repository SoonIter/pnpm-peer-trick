function readPackage(pkg, context) {
  // Override the manifest of foo@1.x after downloading it from the registry
  if (pkg.name === 'react') {
    // Replace bar@x.x.x with bar@2.0.0
    delete pkg['react'];
    pkg.peerDependencies = {
      'loose-envify': '*',
    };
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
