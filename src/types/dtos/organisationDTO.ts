/**
 * Generated by orval v6.2.3 🍺
 * Do not edit manually.
 * Jobbi Back-end
 * Swagger for Jobbi Back-end

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */

/**
 * An user
 */
export interface OrganisationDTO {
  /** The address */
  address?: string;
  bankAccount?: string;
  companyColor?: string;
  contactEmail?: string;
  contactPhoneNumber?: string;
  /** The id */
  id?: number;
  /** The name */
  name?: string;
  /** The slug */
  slug?: string;
  swift?: string;
  /** The owner Id */
  userId?: number;
  /** The VAT Number */
  vatNumber?: string;
}