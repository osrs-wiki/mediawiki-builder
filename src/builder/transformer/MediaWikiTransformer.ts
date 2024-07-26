import MediaWikiContent from "../content/MediaWikiContent";

abstract class MediaWikiTransformer {
  abstract transform(content: MediaWikiContent[]): MediaWikiContent[];
}

export default MediaWikiTransformer;
