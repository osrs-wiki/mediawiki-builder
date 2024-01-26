import { Template } from "./types";
import MediaWikiTemplate from "../template";

class ClueInfoTemplate extends Template {
  id: string;
  text?: string;
  items?: string;
  notes?: string;
  map?: string;

  constructor(
    id: string,
    text: string,
    items: string,
    notes: string,
    map: string
  ) {
    super("Clue info");
    this.id = id;
    this.text = text;
    this.items = items;
    this.notes = notes;
    this.map = map;
  }

  build() {
    const clueInfoTemplate = new MediaWikiTemplate(this.name);
    clueInfoTemplate.add("id", this.id);
    if (this.text) {
      clueInfoTemplate.add("text", this.text);
    }
    if (this.items) {
      clueInfoTemplate.add("items", this.items);
    }
    if (this.notes) {
      clueInfoTemplate.add("notes", this.notes);
    }
    if (this.map) {
      clueInfoTemplate.add("map", this.map);
    }
    return clueInfoTemplate;
  }
}

export default ClueInfoTemplate;
