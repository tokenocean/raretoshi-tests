# Raretoshi Tests
A set of automatic tests for Raretoshi

## Setup
To install this repository, clone it then run `npm install` inside it.

To run a test, simply run `npm test` in this repo.  
To run a test headless (no browser window), run `npm run test-headless` instead.

## Configuration
The configuration is stored in `config.js`.  If you don't have one, it will just use the default configuration.  If you want to make one, simply copy `config.js.sample`, and edit whatever parameters you want.  Currently, the only thing to configure is the URL that this repo tests.
