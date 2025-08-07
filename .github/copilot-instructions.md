# GitHub Copilot Instructions

## Project Overview

This is a TypeScript library for building MediaWiki content programmatically, specifically designed for the OSRS (Old School RuneScape) Wiki. The library provides a fluent API for creating MediaWiki markup (wikitext) through a builder pattern, with support for templates, tables, links, and other MediaWiki elements.

## Code Style & Architecture

### General Guidelines

- Use TypeScript with strict typing enabled
- Follow ESLint and Prettier configurations
- Export all public APIs from appropriate index files
- Prefer composition over inheritance for content types
- Use abstract classes for base functionality
- Follow builder pattern for the main API

### File Organization

- Main exports are in `src/index.ts`
- Core builder logic is in `src/builder/`
- Content types are organized in `src/builder/content/contents/`
- Each content type has its own directory with:
  - `index.ts` - Main export
  - `[ContentType].ts` - Implementation
  - `[ContentType].types.ts` - Type definitions
  - `[ContentType].test.ts` - Unit tests
- Transformers for post-processing are in `src/builder/transformer/`
- Utility functions are in appropriate `*.utils.ts` files

### Library Structure

The library follows a hierarchical structure:

```typescript
MediaWikiBuilder
├── content: MediaWikiContent[]     // Array of content elements
├── transformers: MediaWikiTransformer[]  // Post-processing transformers
├── addContent(content)             // Add single content element
├── addContents(contents[])         // Add multiple content elements
├── addTransformer(transformer)    // Add post-processor
└── build()                        // Generate final wikitext
```

### Content Type Implementation

When creating new content types:

```typescript
import MediaWikiContent from "../../MediaWikiContent";
import { MediaWikiContents } from "../../MediaWikiContent.types";

export class MediaWikiNewContent extends MediaWikiContent {
  constructor(children?: MediaWikiContents) {
    super(children);
    // Initialize properties
  }

  build(): string {
    // Return the MediaWiki markup
    return "wikitext output";
  }
}
```

Key principles:
- Extend `MediaWikiContent` abstract class
- Implement required `build()` method that returns wikitext string
- Support optional children content via constructor
- Use `buildChildren()` helper for nested content
- Export from the content type's `index.ts` file

### Content Types Directory Structure

Each content type should follow this structure:

```
MediaWikiContentType/
├── index.ts                    # Export the content type
├── MediaWikiContentType.ts     # Main implementation
├── MediaWikiContentType.types.ts  # Type definitions
└── MediaWikiContentType.test.ts   # Unit tests
```

### Type Definitions

- Define types in separate `*.types.ts` files
- Use descriptive type names with the content type prefix
- Prefer `type` declarations over `interface` for consistency
- Export types from the main content index for public APIs
- Use union types for flexible parameter handling

Example:
```typescript
// MediaWikiTemplate.types.ts
export type MediaWikiTemplateParam = {
  key?: string;
  value: string;
};

export type MediaWikiTemplateOptions = {
  collapsed?: boolean;
};
```

### Testing Guidelines

- Use Jest for unit testing
- Test files should be co-located with source files
- Use snapshot testing for `build()` output verification
- Test both positive and edge cases
- Mock dependencies when needed

Example test structure:
```typescript
import { MediaWikiContentType } from "./MediaWikiContentType";

describe("MediaWikiContentType", () => {
  test("basic functionality", () => {
    const content = new MediaWikiContentType("test");
    expect(content.build()).toBe("expected wikitext");
  });

  test("with options", () => {
    const content = new MediaWikiContentType("test", { option: true });
    expect(content.build()).toMatchSnapshot();
  });
});
```

### Builder API Patterns

The main `MediaWikiBuilder` class uses method chaining:

```typescript
import { MediaWikiBuilder, MediaWikiText, MediaWikiTemplate } from "@osrs-wiki/mediawiki-builder";

const builder = new MediaWikiBuilder()
  .addContent(new MediaWikiText("Introduction"))
  .addContent(new MediaWikiTemplate("Infobox"))
  .addContent(new MediaWikiText("Content"));

const wikitext = builder.build();
```

### Content Composition

Content can be nested and composed:

```typescript
// Content with children
const header = new MediaWikiHeader("Title", [
  new MediaWikiText("Subtitle text")
]);

// Content arrays
const contents = [
  new MediaWikiText("First paragraph"),
  new MediaWikiText("Second paragraph")
];
```

### MediaWiki Markup Generation

When implementing `build()` methods:

- Generate valid MediaWiki markup (wikitext)
- Handle special characters and escaping appropriately
- Use consistent formatting (spacing, line breaks)
- Support both inline and block-level content
- Consider collapsing/expanding for templates with many parameters

Example markup patterns:
```typescript
// Template: {{Template|param=value}}
// Link: [[Page|Display Text]]
// External Link: [https://example.com Display Text]
// Bold: '''text'''
// Italic: ''text''
// Header: == Level 2 Header ==
```

### Transformer Implementation

For post-processing content:

```typescript
import MediaWikiTransformer from "../MediaWikiTransformer";
import MediaWikiContent from "../content/MediaWikiContent";

export class CustomTransformer extends MediaWikiTransformer {
  transform(content: MediaWikiContent[]): MediaWikiContent[] {
    // Apply transformations to content array
    return content.map(item => /* transform logic */);
  }
}
```

## Dependencies & Build

### Core Dependencies
- **tslib**: TypeScript runtime helpers (production dependency)
- **tsdx**: Build tooling for TypeScript libraries
- **jest**: Testing framework
- **eslint/prettier**: Code quality and formatting

### Build Scripts
- `yarn build`: Compile TypeScript to JavaScript
- `yarn test`: Run Jest tests
- `yarn lint`: Run ESLint
- `yarn start`: Watch mode for development

### Publishing
- Uses changesets for version management
- Supports canary releases for testing
- Exports both CommonJS and ES modules
- Includes TypeScript declarations

## API Design Principles

### Fluent Interface
- Support method chaining where appropriate
- Return `this` from builder methods
- Make common operations simple and readable

### Type Safety
- Use strict TypeScript configuration
- Provide comprehensive type definitions
- Support IntelliSense for better developer experience

### Extensibility
- Abstract base classes for easy extension
- Transformer pattern for post-processing
- Plugin-like architecture for content types

### MediaWiki Compatibility
- Generate valid MediaWiki markup
- Support OSRS Wiki specific templates and conventions
- Handle MediaWiki escaping and special characters
- Follow MediaWiki formatting standards

## Error Handling

- Use TypeScript types to prevent common errors
- Validate inputs where appropriate
- Provide meaningful error messages
- Handle null/undefined content gracefully (filter in `addContents`)

## Performance Considerations

- Minimize object creation in `build()` methods
- Use efficient string concatenation
- Cache expensive operations when possible
- Keep transformer operations lightweight

## Version Management

- Follow semantic versioning (semver)
- Create changesets for all user-facing changes
- Use `patch` for bug fixes, `minor` for new features, `major` for breaking changes
- Always include changeset files in pull requests

## OSRS Wiki Integration

This library is specifically designed for OSRS Wiki content generation:
- Support common OSRS Wiki templates
- Handle game-specific content types
- Generate markup compatible with MediaWiki installations
- Consider OSRS Wiki naming conventions and standards

Remember: This is a foundational library used by other OSRS Wiki tools. Maintain backward compatibility, ensure comprehensive testing, and prioritize developer experience through clear APIs and good TypeScript support.
