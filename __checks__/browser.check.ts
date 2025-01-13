import * as path from 'path';
import { BrowserCheck } from 'checkly/constructs';

new BrowserCheck('google-visual-regression-check', {
  name: 'Google',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.google.com' },
  ],
});

new BrowserCheck('apple-visual-regression-check', {
  name: 'Apple',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.apple.com' },
  ],
});

new BrowserCheck('microsoft-visual-regression-check', {
  name: 'Microsoft',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.microsoft.com' },
  ],
});

new BrowserCheck('amazon-visual-regression-check', {
  name: 'Amazon',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.amazon.com' },
  ],
});

new BrowserCheck('ibm-visual-regression-check', {
  name: 'IBM',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.ibm.com' },
  ],
});

new BrowserCheck('intel-visual-regression-check', {
  name: 'Intel',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.intel.com' },
  ],
});

// new BrowserCheck('adobe-visual-regression-check', {
//   name: 'Adobe',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.adobe.com' },
//   ],
// });

new BrowserCheck('samsung-visual-regression-check', {
  name: 'Samsung',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.samsung.com' },
  ],
});

new BrowserCheck('nvidia-visual-regression-check', {
  name: 'NVIDIA',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.nvidia.com' },
  ],
});

// new BrowserCheck('tesla-visual-regression-check', {
//   name: 'Tesla',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.tesla.com' },
//   ],
// });

new BrowserCheck('facebook-visual-regression-check', {
  name: 'Facebook',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.facebook.com' },
  ],
});

new BrowserCheck('twitter-visual-regression-check', {
  name: 'Twitter',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.twitter.com' },
  ],
});

new BrowserCheck('linkedin-visual-regression-check', {
  name: 'LinkedIn',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.linkedin.com' },
  ],
});

new BrowserCheck('instagram-visual-regression-check', {
  name: 'Instagram',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.instagram.com' },
  ],
});

new BrowserCheck('reddit-visual-regression-check', {
  name: 'Reddit',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.reddit.com' },
  ],
});

new BrowserCheck('tiktok-visual-regression-check', {
  name: 'TikTok',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.tiktok.com' },
  ],
});

new BrowserCheck('snapchat-visual-regression-check', {
  name: 'Snapchat',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.snapchat.com' },
  ],
});

new BrowserCheck('pinterest-visual-regression-check', {
  name: 'Pinterest',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.pinterest.com' },
  ],
});

new BrowserCheck('tumblr-visual-regression-check', {
  name: 'Tumblr',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.tumblr.com' },
  ],
});

new BrowserCheck('quora-visual-regression-check', {
  name: 'Quora',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.quora.com' },
  ],
});

new BrowserCheck('nytimes-visual-regression-check', {
  name: 'New York Times',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.nytimes.com' },
  ],
});

new BrowserCheck('bbc-visual-regression-check', {
  name: 'BBC',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.bbc.com' },
  ],
});

new BrowserCheck('cnn-visual-regression-check', {
  name: 'CNN',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.cnn.com' },
  ],
});

new BrowserCheck('aljazeera-visual-regression-check', {
  name: 'Al Jazeera',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.aljazeera.com' },
  ],
});

new BrowserCheck('nbcnews-visual-regression-check', {
  name: 'NBC News',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.nbcnews.com' },
  ],
});

new BrowserCheck('foxnews-visual-regression-check', {
  name: 'Fox News',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.foxnews.com' },
  ],
});

new BrowserCheck('huffpost-visual-regression-check', {
  name: 'HuffPost',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.huffpost.com' },
  ],
});

new BrowserCheck('washingtonpost-visual-regression-check', {
  name: 'Washington Post',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.washingtonpost.com' },
  ],
});

new BrowserCheck('reuters-visual-regression-check', {
  name: 'Reuters',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.reuters.com' },
  ],
});

new BrowserCheck('forbes-visual-regression-check', {
  name: 'Forbes',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.forbes.com' },
  ],
});

new BrowserCheck('wikipedia-visual-regression-check', {
  name: 'Wikipedia',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.wikipedia.org' },
  ],
});

new BrowserCheck('khanacademy-visual-regression-check', {
  name: 'Khan Academy',
  code: {
    entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
  },
  environmentVariables: [
    { key: 'CHECK_URL', value: 'https://www.khanacademy.org' },
  ],
});

// new BrowserCheck('coursera-visual-regression-check', {
//   name: 'Coursera',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.coursera.org' },
//   ],
// });

// new BrowserCheck('edx-visual-regression-check', {
//   name: 'edX',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.edx.org' },
//   ],
// });

// new BrowserCheck('duolingo-visual-regression-check', {
//   name: 'Duolingo',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.duolingo.com' },
//   ],
// });

// new BrowserCheck('udemy-visual-regression-check', {
//   name: 'Udemy',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.udemy.com' },
//   ],
// });

// new BrowserCheck('codecademy-visual-regression-check', {
//   name: 'Codecademy',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.codecademy.com' },
//   ],
// });

// new BrowserCheck('pluralsight-visual-regression-check', {
//   name: 'Pluralsight',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.pluralsight.com' },
//   ],
// });

// new BrowserCheck('skillshare-visual-regression-check', {
//   name: 'Skillshare',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.skillshare.com' },
//   ],
// });

// new BrowserCheck('ted-visual-regression-check', {
//   name: 'TED',
//   code: {
//     entrypoint: path.join(__dirname, 'visual-regression.spec.ts'),
//   },
//   environmentVariables: [
//     { key: 'CHECK_URL', value: 'https://www.ted.com' },
//   ],
// });