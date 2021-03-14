import { VideoProviders } from "@/components/VideoProviderIcon/VideoProviderIcon.types";
import { Store } from "@/store/index";

export default [
  {
    id: 0,
    provider: VideoProviders.YOUTUBE,
    title: "Room title here",
    description: "Come join, everyone is welcome: Sugest us a vid."
  },
  {
    id: 1,
    provider: VideoProviders.TWITCH,
    title: "Room title here 1",
  },
  {
    id: 2,
    provider: VideoProviders.TWITCH,
    title: "Room title here 2",
    description: "Come join, everyone is welcome: Sugest us a vid."
  },
  {
    id: 3,
    provider: VideoProviders.VIMEO,
    title: "Room title here 3",
    description: "Some video room with dank videos"
  },
  {
    id: 4,
    provider: VideoProviders.YOUTUBE,
    title: "War videos ONYL!",
    description: "War videos only | Read the rules before requesting"
  }
] as Store['feed']