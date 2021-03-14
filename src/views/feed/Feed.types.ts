import { VideoProviders } from "@/components/VideoProviderIcon/VideoProviderIcon.types";

export interface FeedItem {
  id: number;
  title: string;
  description?: string;
  provider: VideoProviders;
}