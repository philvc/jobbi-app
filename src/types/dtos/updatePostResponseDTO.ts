/**
 * Generated by orval v6.2.4 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */

/**
 * An post
 */
export interface UpdatePostResponseDTO {
  /** The description */
  description: string;
  /** The id */
  id: string;
  /** The search id */
  searchId: string;
  /** The title */
  title: string;
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
