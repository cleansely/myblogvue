import {request} from "@/network/request";

export function getArchivesList() {
  return request({
    url: '/search/',
    params: {
      size: 999
    }
  })
}