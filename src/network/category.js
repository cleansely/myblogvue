import {request} from "@/network/request";

export function getCategory(params) {
  return request({
    url: '/category/',
    params: params
  })
}

export function getCategoryName(id, params) {
  return request({
    url: '/category/' + id,
    params: params
  })
}

export function getCategoryList(params) {
  return request({
    url: '/search/',
    params: params
  })
}