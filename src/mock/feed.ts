import { VideoProviders } from "@/components/video-provider-icon/VideoProviderIcon.types";
import { Store } from "@/store/index";

export default [
  {
    id: 0,
    providers: [VideoProviders.YOUTUBE],
    title: "Room title here",
    description: "Come join, everyone is welcome: Sugest us a vid."
  },
  {
    id: 1,
    providers: [VideoProviders.TWITCH, VideoProviders.YOUTUBE],
    title: "Room title here 1",
  },
  {
    id: 2,
    providers: [VideoProviders.TWITCH],
    title: "Room title here 2",
    description: "Come join, everyone is welcome: Sugest us a vid."
  },
  {
    id: 3,
    providers: [VideoProviders.VIMEO],
    title: "Room title here 3",
    description: "Some video room with dank videos"
  },
  {
    id: 4,
    providers: [VideoProviders.YOUTUBE],
    title: "War videos ONYL!",
    description: "War videos only | Read the rules before requesting"
  },
  {
    id: 5,
    providers: [VideoProviders.VIMEO],
    title: "War videos ONYL!",
    description: "War videos only | Read the rules before requesting"
  },
  {
    id: 6,
    providers: [VideoProviders.VIMEO, VideoProviders.TWITCH, VideoProviders.YOUTUBE],
    title: "War videos ONYL!",
    description: "War videos only | Read the rules before requesting"
  },
  {
    id: 7,
    providers: [VideoProviders.VIMEO, VideoProviders.TWITCH, VideoProviders.YOUTUBE],
    title: "Cute cats for the plebs!",
  },

] as Store['feed']