import { NowRequest, NowResponse } from '@now/node'

import { getUser } from '@Services/Auth'

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(JSON.stringify(getUser()))
}
