import { UPDATE_COLLECTIONS } from "../types"

export const upadteCollections = (collections) => {
    return {
        type: UPDATE_COLLECTIONS,
        payload: collections
    }
}