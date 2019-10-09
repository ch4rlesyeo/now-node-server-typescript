import { NowRequest, NowResponse } from '@now/node'

import { getUser } from './services/Auth'

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(JSON.stringify(getUser()))
}
