/* @flow */
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

export type Base64String = string;

export function base64(i: string): Base64String {
  if (global.Buffer) {
    return new Buffer(i, 'utf8').toString('base64');
  }

  const base64 = require('base-64');
  return base64.encode(i);
}

export function unbase64(i: Base64String): string {
  if (global.Buffer) {
    return new Buffer(i, 'base64').toString('utf8');
  }

  const base64 = require('base-64');
  return base64.decode(i);
}
