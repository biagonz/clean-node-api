import { HttpResquest, HttpResponse } from './http'

export interface Controller {
  handle: (httpRequest: HttpResquest) => HttpResponse
}
