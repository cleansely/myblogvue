import {request} from "@/network/request";

export function getPostList(params) {
  return request({
    url: '/post/',
    params: params
  })
}