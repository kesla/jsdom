"use strict";

class Range {
  constructor(document) {
    this.startContainer = document;
    this.endContainer = document;
    this.startOffset = 0;
    this.endOffset = 0;
    this.collapsed = true;
  }

  // noop, see https://dom.spec.whatwg.org/#dom-range-detach
  detach() {}
}

module.exports = function (core) {
  core.Range = Range;
};
