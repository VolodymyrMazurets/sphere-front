export interface AccountResponseType {
  Name?: string;
  MailAddress?: string;
  ImageUrl?: string;
}
export interface AllInfluencerListsResponseType {
  ListId?: string;
  ListName?: string;
  ListThumbnail?: null | string;
  ListNotes?: string;
  LastUpdated: number;
}
export interface ListDetailsResponseType {
  ListThumbnail?: null | string;
  Influencers?: ListDetailsInfluencersResponseType[];
  ListNotes?: string | null;
  LastUpdated?: number;
  ListName?: string;
}
export interface ListDetailsInfluencersResponseType {
  Engagement?: number;
  Verified?: boolean;
  Username?: string;
  FullName?: string;
  Bio?: string;
  Followers: number;
  EstimatedLocation?: string;
  InfluencerId?: string;
  NumPosts?: number;
  ProfilePicture?: string | null;
  EngagementNum?: number;
}
export interface SearchPayloadType {
  SearchString?: string;
  LocationViewport?: {
    TopLeft?: string;
    BottomRight?: string;
  };
  LocationName?: string;
  MinFollowers?: number;
  MaxFollowers?: number;
  SortBy?: "Followers" | "Engagement";
  SortOrder?: "ASC" | "DESC";
  MinAvgViews?: number;
  MinAvgComments?: number;
  Verified?: boolean;
  HasEmail?: boolean;
  Page?: number;
}

export interface CreateListPayloadType {
  ListNotes: string;
  ListName: string;
}
