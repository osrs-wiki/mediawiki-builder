import { PollPosition } from "./PollWrapperTemplate.types";
import { MediaWikiTemplate } from "../../MediaWikiTemplate";
import { Template } from "../Template";

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
