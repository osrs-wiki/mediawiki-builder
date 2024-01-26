import MediaWikiDate from "../../../date";
import MediaWikiFile from "../../../file";
import MediaWikiLink from "../../../link";
import { InfoboxNo } from "../infobox";

type InfoboxItem = {
  name: string;
  image: MediaWikiFile;
  release: MediaWikiDate | "";
  update: MediaWikiLink | "";
  removal?: MediaWikiDate;
  removalupdate?: MediaWikiLink;
  aka?: string;
  members: boolean;
  quest: MediaWikiLink | InfoboxNo;
  tradeable: boolean;
  bankable?: boolean;
  stacksinbank?: boolean;
  placeholder?: boolean;
  equipable: boolean;
  stackable: boolean;
  noteable?: boolean;
  edible?: boolean;
  options: string[];
  wornoptions?: string[];
  destroy?: string;
  examine: string;
  value: number;
  alchable?: boolean;
  weight: string;
  respawn?: number;
  exchange?: boolean;
  gemwname?: string;
  id: string;
  trailblazerRegion?: string;
};

export default InfoboxItem;
