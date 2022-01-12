/**
 * Arguments for relation naming metadata.
 */
export interface JoinTableIndexMetadataArgs {

    /**
     * User specified name for the index on the owner side.
     * By default is auto generated.
     */
    readonly ownerName?: string,

    /**
     * User specified name for the index on the inverse side.
     * By default is auto generated.
     */
    readonly inverseName?: string

}
