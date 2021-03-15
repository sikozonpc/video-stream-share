import { PropType } from "vue";

export enum VideoProviders {
  YOUTUBE = "youtube",
  TWITCH = "twitch",
  VIMEO = "vimeo",
}


export default {
  provider: {
    type: String as PropType<VideoProviders>,
    required: true,
  },
};
