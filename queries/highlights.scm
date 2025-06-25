"canvas" @keyword
"\\B< *-*([A-Z][a-zA-Z0-9_]*)\\b>" @constructor
"\\B\\s([A-Z][a-zA-Z0-9_]*):[\\s]*\\s" @keyword
(pair key: (string) @variable)
(number) @number
["@", ",", ":"] @keyword
"[\\[] *(([A-Z][a-zA-Z0-9_]*) *@ *)(([a-zA-Z_][a-zA-Z0-9_]*) *,* *)(([a-zA-Z_][a-zA-Z0-9_]*) *,* *)(([a-zA-Z_][a-zA-Z0-9_]*) *,* *)(([a-zA-Z_][a-zA-Z0-9_]*) *,* *)(([a-zA-Z_][a-zA-Z0-9_]*) *[\\]]:?)" @keyword
