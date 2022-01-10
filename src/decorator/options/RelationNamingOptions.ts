/**
 * Describes relation naming options.
 */
export interface RelationNamingOptions {

    /**
     * User specified name for the foreign key on the owner side.
     * By default is auto generated.
     */
    foreignKeyOwnerName?: string,

    /**
     * User specified name for the foreign key on the inverse side.
     * By default is auto generated.
     */
    foreignKeyInverseName?: string

    /**
     * User specified name for the index on the owner side.
     * By default is auto generated.
     */
    indexOwnerName?: string,

    /**
     * User specified name for the index on the inverse side.
     * By default is auto generated.
     */
    indexInverseName?: string

}
