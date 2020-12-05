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
  Email?: string;
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
  status?: string;
  totalResults?: number;
  articles?: ArticleResponseType[];
  message?: string;
}

export interface ArticleResponseType {
  source?: {
    id?: null | string | number;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: Date;
  content?: string;
}

// Payload types

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
  MinEngagement?: number;
  Language?: 'en' | 'es';
}

export interface CreateListPayloadType {
  ListNotes: string;
  ListName: string;
}
