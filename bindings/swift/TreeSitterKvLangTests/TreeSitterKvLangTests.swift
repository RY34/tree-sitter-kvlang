import XCTest
import SwiftTreeSitter
import TreeSitterKvlang

final class TreeSitterKvlangTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_kvlang())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Kivi Language grammar")
    }
}
