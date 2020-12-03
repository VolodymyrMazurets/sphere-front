import { AllInfluencerListsResponseType, ListDetailsInfluencersResponseType, ListDetailsResponseType } from "../services/http/types";

export interface ListType extends AllInfluencerListsResponseType {}
export interface ListDetailsType extends ListDetailsResponseType {}
export interface SearchType extends ListDetailsInfluencersResponseType {}
