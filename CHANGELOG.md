# @osrs-wiki/mediawiki-builder

## 1.9.2

### Patch Changes

- 3fc2eaa: Export MediaWikiContent types & utils

## 1.9.1

### Patch Changes

- 0d9df9f: Fix MediaWikiTemplate collapsing with collapsed:false when <4 params existed

## 1.9.0

### Minor Changes

- d3546a8: Add support for individual table cell headers via header option in MediaWikiTableCellOptions

## 1.8.2

### Patch Changes

- 32c614c: Fix TypeError when building content arrays containing undefined elements by adding safety filter to buildContents function.

## 1.8.1

### Patch Changes

- 61d2155: Fix InfoboxTemplate number 0 parsing

## 1.8.0

### Minor Changes

- 22251d1: Add support for rendering no children tags in MediaWikiHTML

### Patch Changes

- faf6c24: Bump tj-actions/changed-files from 41 to 46 in /.github/workflows

## 1.7.0

### Minor Changes

- c19fd05: Add support for rendering MediaWikiContent array in InfoboxTemplate params

## 1.6.1

### Patch Changes

- 2898aba: Correctly build InfoBoxTemplate falsey values

## 1.6.0

### Minor Changes

- e6e0434: Add MediaWikiContents for supporting various children content in MediaWikiContent
- e6e0434: Change MediaWikiFile caption to MediaWikiContents
- e6e0434: Change MediaWikiText value to MediaWikiContents
- e6e0434: Change MediaWikiExternLink label to MediaWikiContents
- e6e0434: Change MediaWikiHeader value to MediaWikiContents
- e6e0434: Change MediaWikiListItem value to MediaWikiContents

## 1.5.0

### Minor Changes

- 4ada4be: Implement new project structure

### Patch Changes

- 4ada4be: Upgrade dependencies

## 1.4.0

### Minor Changes

- 6524297: Add TemplateOptions to MediaWikiTemplate

### Patch Changes

- 25b294f: Bump ws from 7.5.9 to 7.5.10
- b499838: Bump semver from 5.7.1 to 5.7.2
- a444737: Bump json5 from 1.0.1 to 1.0.2
- dd9b4a2: Bump tj-actions/changed-files from 35 to 41 in /.github/workflows
- 5ee1ecd: Bump @babel/traverse from 7.18.6 to 7.24.5
- 2068af6: Bump word-wrap from 1.2.3 to 1.2.5

## 1.3.1

### Patch Changes

- bc8359d: Add tests for MediaWikiText
- 86f6289: Trim headers

## 1.3.0

### Minor Changes

- 5b64391: Add collapse option to MediaWikiHTML

## 1.2.3

### Patch Changes

- 2902f5c: Fix infobox name capitalization
- 2902f5c: Do not include infobox params if they are undefined

## 1.2.2

### Patch Changes

- c757290: Fix InfoboxItem update type

## 1.2.1

### Patch Changes

- add2309: Fix spacing for flattened template output

## 1.2.0

### Minor Changes

- ae92034: Add support for table, row, and cell options in MediaWikiTable
- ae92034: Add support for minimal table formatting in MediaWikiTable

## 1.1.2

### Patch Changes

- faefd29: Fix type exporting

## 1.1.1

### Patch Changes

- 3c295d9: Add npmrc

## 1.1.0

### Minor Changes

- dc7c62d: Project setup
