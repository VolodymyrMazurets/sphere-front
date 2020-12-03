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
    TaggedUsers?: {
      [key: string]: {
        Occurrences?: string;
      };
    };
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
    Hashtags?: {
      [key: string]: {
        Occurrences?: string;
      };
    };
    Profile?: ListDetailsInfluencersResponseType;
    Historical?: [];
    Emojis?: {
      [key: string]: {
        Occurrences?: string;
        EmojiShort?: string;
      };
    };
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
