import {request} from "@/network/request";

export function getPostList() {
  return request({
    url: '/post.json'
  })
}