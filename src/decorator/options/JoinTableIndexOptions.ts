/**
 * Describes join table index options.
 */
export interface JoinTableIndexOptions {
    /**
     * User specified name for the index on the owner side.
     * By default is auto generated.
     */
    ownerName?: string,

    /**
     * User specified name for the index on the inverse side.
     * By default is auto generated.
     */
    inverseName?: string

}
