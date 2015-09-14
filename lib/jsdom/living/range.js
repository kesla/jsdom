"use strict";

class Range {
  constructor(document) {
    this.startContainer = document;
    this.endContainer = document;
    this.startOffset = 0;
    this.endOffset = 0;
  }

  collapse(toStart) {
    if (toStart) {
      this.endContainer = this.startContainer;
      this.endOffset = this.startOffset;
    } else {
      this.startContainer = this.endContainer;
      this.startOffset = this.endOffset;
    }
  }

  get collapsed() {
    return this.startContainer === this.endContainer && this.startOffset === this.endOffset;
  }

  setStart(startNode, startOffset) {
    this.startContainer = startNode;
    this.startOffset = startOffset;
  }

  setEnd(endNode, endOffset) {
    this.endContainer = endNode;
    this.endOffset = endOffset;
  }

  // noop, see https://dom.spec.whatwg.org/#dom-range-detach
  detach() {}
}

module.exports = function (core) {
  core.Range = Range;
};
