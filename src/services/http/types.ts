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
  LastUpdated?: number;
  ListAmount?: string | number | null;
}
export interface ListDetailsResponseType {
  ListThumbnail?: null | string;
  Influencers?: ListDetailsInfluencersResponseType[];
  ListNotes?: string | null;
  LastUpdated?: number;
  ListName?: string;
}
export interface ListDetailsInfluencersResponseType {
  Engagement?: number | null;
  Verified?: boolean | null;
  Username?: string | null;
  FullName?: string | null;
  Bio?: string | null;
  Followers: number | null;
  EstimatedLocation?: string | null;
  InfluencerId?: string | null;
  NumPosts?: number | null;
  ProfilePicture?: string | null;
  EngagementNum?: number | null;
  Email?: string | null;
}
export interface ProfileResponceType {
  Socials?: {
    Vsco?: boolean;
    Onlyfans?: boolean;
    Twitch?: boolean;
    Youtube?: boolean;
    Twitter?: boolean;
    Tiktok?: boolean;
    Spotify?: boolean;
    Snapchat?: boolean;
  };
  MonaMetrics?: {};
  Id?: string;
  Instagram?: {
    TaggedUsers?: TaggsType;
    AccessCaptions?: {
      [key: string]: {
        Occurrences?: string;
        Type?: string;
      };
    };
    EngagementMetrics?: {
      Engagement?: string;
      MaxLikes?: string;
      AverageComments?: string;
      AverageLikes?: string;
      AverageEngagementLikes?: string;
      MaxComments?: string;
      MaxVideoViews?: string;
      AverageEngagementLikesComments?: string;
      DaysBetweenPost?: string;
    };
    LocationTypes?: {
      [key: string]: {
        Occurrences?: string;
      };
    };
    PostCaptions?: {
      [key: string]: string;
    };
    Locations?: InstagramLocationsType;
    Metadata?: {
      ProfilePictureURL?: string;
    };
    Hashtags?: TaggsType;
    Profile?: ListDetailsInfluencersResponseType;
    Historical?: IntagramHistoricalType[];
    Emojis?: InstagramEmojisType;
  };
  EstimatedLocation?: EstimatedLocationType;
}

export interface EstimatedLocationType {
  FormattedAddress?: string;
  Viewport?: {
    SouthwestCoordinates?: string;
    NortheastCoordinates?: string;
  };
  LocationName?: string;
  Coordinates?: string;
}

export interface InstagramLocationsType {
  [key: string]: {
    PlaceId?: string;
    PriceLevel?: null;
    LocationTypes?: string[];
    Coordinates?: string;
    FormattedAddress?: string;
    Viewport?: {
      SouthwestCoordinates?: string;
      NortheastCoordinates?: string;
    };
    Occurrences?: string;
    Latitude?: string;
    Icon?: string;
    Longitude?: string;
  };
}

export interface TaggsType {
  [key: string]: {
    Occurrences?: string;
  };
}

export interface IntagramHistoricalType {
  AverageComments?: string;
  AverageEngagementLikes?: string;
  AverageEngagementLikesComments?: string;
  AverageLikes?: string;
  AverageVideoViews?: string;
  Bio?: string;
  BusinessCategory?: string;
  DaysBetweenPost?: string;
  Email?: string;
  Engagement?: string;
  Followers?: string;
  Following?: string;
  LastUpdated?: string;
  MaxComments?: string;
  MaxLikes?: string;
  MaxVideoViews?: string;
  NumPosts?: string;
}

export interface InstagramEmojisType {
  [key: string]: {
    Occurrences?: string;
    EmojiShort?: string;
  };
}

export interface TopicsResponseType {
  value?: ArticleResponseType[];
}

export interface ArticleResponseType {
  id: string;
  title: string;
  url: string;
  description: string;
  body: string;
  datePublished: string;
  webpageUrl: string;
  provider: {
    name: string;
  };
}

// Payload types

export interface SearchPayloadType {
  SearchString?: string | null;
  LocationViewport?: {
    TopLeft?: string | null;
    BottomRight?: string | null;
  };
  LocationName?: string | null;
  MinFollowers?: number | null;
  MaxFollowers?: number | null;
  SortBy?: "Followers" | "Engagement" | "Relevance" | null;
  SortOrder?: "ASC" | "DESC" | null;
  MinAvgViews?: number | null;
  MinAvgComments?: number | null;
  Verified?: boolean | null;
  HasEmail?: boolean | null;
  Page?: number | string;
  MinEngagement?: number | null;
  Language?: "en" | "es" | null;
}

export interface CreateListPayloadType {
  ListNotes: string;
  ListName: string;
}
