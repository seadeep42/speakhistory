import { isArray, map, join } from "lodash";

export const SpeakerItem = ({ speakerInfo }) => {
  if (isArray(speakerInfo)) {
    return join(map(speakerInfo, "name"), " and ");
  }
  return speakerInfo.name;
};
