/**
 * Generated by orval v6.2.4 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */
import type { StringArray } from './stringArray';

/**
 * An post
 */
export interface PostDTOBySearchId {
  /** The company address */
  companyAddress?: string;
  /** The company email */
  companyEmail?: string;
  /** The company name */
  companyName?: string;
  /** The company phone number */
  companyPhoneNumber?: string;
  /** The company url */
  companyUrl?: string;
  /** The contact email */
  contactEmail?: string;
  /** The contact firstName */
  contactFirstName?: string;
  /** The contact lastName */
  contactLastName?: string;
  /** The contact phoneNumber */
  contactPhoneNumber?: number;
  /** The description */
  description?: string;
  /** The id */
  id?: string;
  /** The search sector */
  searchId: string;
  tags?: StringArray;
  /** The title */
  title?: string;
  /** The search type */
  type: string;
  /** url */
  url?: string;
  /** The user email */
  userEmail?: string;
  /** The user firstName */
  userFirstName?: string;
  /** UserId */
  userId: string;
  /** The user  lastName */
  userLastName?: string;
}
