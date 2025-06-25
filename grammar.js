/**
 * @file Basic Kivy Language Highlighting for Kivy: The Open Source Python App Development Framework.
 * @author RY34
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "kvlang",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
