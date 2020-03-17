# asic-generator


FIXME: description

Problem to solve:

The challenge is to complete the following function that generates an “ASCII table of contents” for a document.

(defn table-of-contents [document-str]
  (comment return string table of contents))

The input and output of the function are strings of the following specified forms:

The input string:
-----------------
One line for each heading
Heading level is dictated by the number of # characters that prefix it.

Example input:

# Heading 1
## Heading 2
## Another Heading 2
### Heading 3
#### Heading X
## Heading Final

The output string:
------------------
One line for each heading
Nested according to heading level.
Prefixed with ASCII characters:  <└> <─> <├> (see example below).

Example output (the above example input should produce an output that exactly matches this output)

.
└── Heading 1
    ├── Heading 2
    ├── Another Heading 2
    │   └── Heading 3
    │       └── Heading X
    └── Heading Final

## Installation

Download from http://example.com/FIXME.

## Usage

FIXME: explanation

    $ java -jar asic-generator-0.1.0-standalone.jar [args]

## Options

FIXME: listing of options this app accepts.

## Examples

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2020 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
