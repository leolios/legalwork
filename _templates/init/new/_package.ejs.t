---
to: ./package.json
---
{
  "name": "mentions-legales",
  "version": "1.0.0",
  "description": "Génération de vos mentions legales depuis legalwork.fr",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "postinstall": "npm run build"
  },
  "repository": {
    "type": "npm",
    "url": "https://www.npmjs.com/package/legalwork"
  },
  "keywords": [
    "cli",
    "npm",
    "mentions-legales",
    "legalwork"
  ],
  "author": "Jean-Christophe HENRY",
  "license": "GNU GPL 3",
  "bugs": {
    "url": "https://gitlab.com/jeanchristophehenry/legalwork/-/issues"
  },
  "dependencies": {
    "@types/node": "^13.7.0",
    "ts-node": "^8.6.2",
    "tslib": "^1.10.0",
    "typescript": "^3.7.5"
  }
}