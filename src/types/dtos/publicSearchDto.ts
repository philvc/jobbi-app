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
 * Search by id
 */
export interface PublicSearchDto {
  /** Avatar url */
  avatarUrl?: string;
  /** The description */
  description?: string;
  /** The email */
  email?: string;
  /** The firstName */
  firstName?: string;
  /** followerId */
  followerId?: string;
  /** friendshipId */
  friendshipId?: string;
  /** The id */
  id: string;
  /** The lastName */
  lastName?: string;
  /** The search sector */
  sector?: string;
  tags?: StringArray;
  /** The title */
  title?: string;
  /** The search type */
  type: string;
  /** The user id */
  userId: string;
}
