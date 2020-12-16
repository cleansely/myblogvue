import {request} from "@/network/request";

export function getPostDetail(params) {
  return request({
    url: '/post/' + params.id
  })
}