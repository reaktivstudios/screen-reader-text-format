# Screen Reader Text Format

Contributors: jjeaton, reaktivstudios, nick_thegeek
Requires at least: 6.0
Tested up to: 6.1
Stable tag: 1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds a screen reader only text format to the block editor.

## Description

Screen Reader Text Format adds a screen reader only text format control to the block editor. This allows content creators to correctly markup certain types of text content. For example, when using the _strikethrough_ text format, it is almost always correct to include screan reader text that indicates the content has been struck out and if the content is replaced with an insert, the correct solution is to include screen reader text that indicates the insertion.

Without this ability, content creators will have to do complicated HTML edits to create the correct text informing screen readers of strike, insert, and even "important" notes that are indicated with bold text since screen readers are completely agnostic towards those HTML tags.

## Installation

1. Upload the `screen-reader-text-format` folder and all its contents to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions

### Why do I need to use screen reader text?

The most common use case is when the text had been formated using things like strike. This is great for visual users, but users who are accessing content via a screen reader will not know what has happened.

For example, let's say you are writting about a product and that product is normally $100 but the price is marked down to $80. This might be represented as ~$100~ $80. That is to say `<del>$100</del> $80`. A screen reader will read "$100 $80" with no mention of the strike through.

In the best case scenerio this would be written out "Was $100 now $80" but often the design will not allow the space, hence the shorthand. To fix this for screen readers, the screen reader text format can be used to include "was" and "now" so this will make more sense for screen readers.

### How do I use this?

In the block editor, most text content like paragraphs, headings, and lists have a text format toolbar. To use the tool add your text, then highlight it. This should bring up the text format toolbar. Click the down arrow and select the screen reader text format.

### How do I find hidden text?

Once you add and hide text it may be difficult to find. Fortunately we added some highlighting to make this easier. When you are editing a block, any text that is hidden within the block or it's children will be displayed with highlighted.

## Screenshots

## Changelog

### 1.1.0

- [fix] Issue with block based widget editor
- [chore] Update build method
- [chore] Code standard updates
- [core] Optimize images

### 1.0.0

- Initial release

## Upgrade Notice
