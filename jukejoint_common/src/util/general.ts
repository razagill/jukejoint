import * as fs from 'fs';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';

// Ramda exports
export const partial = require('ramda/src/partial');
export const isEmpty = require('ramda/src/isEmpty');

export const jsonConvert = new JsonConvert();
jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

export const logger = (val:any) => {
  console.log(val);
}

export const readFileLineByLine = (pathToFile: string) => {
  const arr = fs.readFileSync(pathToFile).toString().split('\n');
  return arr.filter((entry) => entry !== '');
}

export const getProviderOfLink = (link: string) => {
  // check for youtube
  if (link.indexOf('youtube') > -1 || link.indexOf('youtu.be') > -1) {
    return 'Youtube';
  }
  // check for bandcamp
  if (link.indexOf('bandcamp') > -1) {
    return 'Bankcamp';
  }
  logger(`Unknown Provider found at ${link}`);
  return 'unknown';
}