import type { NextApiRequest, NextApiHandler, NextApiResponse } from 'next'

type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'options'
  | 'trace'
  | 'connect'

type SwitcherCases = {
  [key in HttpMethod]?: NextApiHandler
}

interface ISwitcher {
  (req: NextApiRequest, res: NextApiResponse): any
}

export function createSwitcher(cases: SwitcherCases): ISwitcher {
  return (req, res) => {
    const method = req.method!.toLowerCase() as HttpMethod

    if (method in cases) {
      return cases[method]!(req, res)
    }

    res.status(405)
    res.end('Method Not Allowed')
  }
}

export default createSwitcher
