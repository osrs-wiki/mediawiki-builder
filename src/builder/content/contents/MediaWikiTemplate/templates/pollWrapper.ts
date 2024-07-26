import { Template } from "./types";
import { MediaWikiTemplate } from "../MediaWikiTemplate";

export type PollPosition = "bottom" | "top";

export class PollWrapperTemplate extends Template {
  position: PollPosition;

  constructor(position: PollPosition) {
    super("PollWrapper");
    this.position = position;
  }

  build() {
    const pollWrapperTemplate = new MediaWikiTemplate(this.name);
    pollWrapperTemplate.add("", this.position);
    return pollWrapperTemplate;
  }
}
