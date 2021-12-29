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
 * An shared search
 */
export interface SharedSearchDTO {
  /** Avatar url */
  avatarUrl?: string;
  /** The description */
  description: string;
  /** The firstName */
  firstName?: string;
  /** The id */
  id?: string;
  /** The lastName */
  lastName?: string;
  /** The search sector */
  sector?: string;
  tags?: StringArray;
  /** The title */
  title: string;
  /** UserId */
  userId?: string;
}
