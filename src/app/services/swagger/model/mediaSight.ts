/**
 * Sample Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface MediaSight {
    /**
     * Unique id of a sight.
     */
    id?: string;

    /**
     * Full name of sight.
     */
    name?: string;

    /**
     * Link to image sights.
     */
    photo?: string;

    /**
     * popularity number
     */
    popularity?: number;

    latitude?: number;
    longitude?: number;
}
