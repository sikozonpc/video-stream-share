import { VideoProviders } from "@/components/video-provider-icon/VideoProviderIcon.types";

export interface FeedItem {
  id: number;
  title: string;
  description?: string;
  providers: VideoProviders[];
}
