import { MediaWikiDate } from "../../../../MediaWikiDate";
import { MediaWikiFile } from "../../../../MediaWikiFile";
import { MediaWikiLink } from "../../../../MediaWikiLink";

export type InfoboxNpc = {
  name: string;
  image: MediaWikiFile;
  release: MediaWikiDate | "";
  update: string;
  removal?: MediaWikiDate;
  removalupdate?: MediaWikiDate;
  aka?: string;
  level?: string;
  members: boolean;
  race?: string;
  quest?: string;
  location?: string;
  shop?: MediaWikiLink;
  gender?: string;
  options?: string[];
  map: string;
  examine: string;
  id: string;
  trailblazerRegion?: string;
};
