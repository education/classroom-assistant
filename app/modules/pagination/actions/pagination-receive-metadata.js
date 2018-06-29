import {RECEIVE_METADATA} from "../constants"

export const receiveMetadata = (page, link) => {
  var nextPageId = null
  if (link && link.params.page) {
    nextPageId = link.params.page
  }
  return {
    type: RECEIVE_METADATA,
    id: page,
    nextPageId: nextPageId,
  }
}