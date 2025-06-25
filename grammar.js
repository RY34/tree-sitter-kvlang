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
    source_file: ($) => repeat($._definition),

    _definition: ($) => choice($.rule_definition, $.dynamic_rule),

    rule_definition: ($) =>
      seq(/<[a-zA-Z]*>:/, $.class_definition, $.keyword_definition),

    class_definition: ($) => seq(/[0-9a-zA-Z0-9]+:/, $.property_definition),

    property_definition: ($) => seq(/[0-9a-zA-Z0-9]+:/, $.pair_definition),

    pair_definition: ($) =>
      prec.left(seq(/[0-9a-zA-Z0-9]+:/, /[0-9a-zA-Z0-9]+:/)),

    keyword_definition: ($) => seq("self", "if", "else", "canvas"),

    dynamic_rule: ($) =>
      seq(
        /<[0-9a-zA-Z0-9]+@[0-9a-zA-Z0-9]+>:/,
        /<[0-9a-zA-Z0-9]+@[0-9a-zA-Z0-9]+[+0-9a-zA-Z0-9]+>:/,
        $.class_definition,
        $.keyword_definition,
      ),
  },
});
