import {request} from "@/network/request";

export function getTag(params) {
  return request({
    url: '/tag/',
    params: params
  })
}

export function getTagName(id, params) {
  return request({
    url: '/tag/' + id,
    params: params
  })
}

export function getTagList(params) {
  return request({
    url: '/search/',
    params: params
  })
}