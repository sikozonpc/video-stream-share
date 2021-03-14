export enum VideoProviders {
  YOUTUBE = "youtube",
  TWITCH = "twitch",
  VIMEO = "vimeo",
}


export default {
  provider: {
    type: String,
    required: true,
    validator: (value: string) => Object.values(VideoProviders).includes(value as VideoProviders),
  },
};
