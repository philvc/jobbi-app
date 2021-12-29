/**
 * Generated by orval v6.2.4 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */
import type { UserDTO } from './userDTO';
import type { StringArray } from './stringArray';

/**
 * My search
 */
export interface MySearchDTO {
  /** The id */
  id?: string;
  /** The participants */
  participants?: UserDTO[];
  /** The search sector */
  sector?: string;
  tags?: StringArray;
  /** The title */
  title: string;
  /** The search type */
  type: string;
}
