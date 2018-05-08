import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios/index'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singerId, songid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    songid: songid,
    singermid: singerId
  })
  return jsonp(url, data, options)
}

export function getMusic(mid) {
  const url = '/api/getMusic'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    filename: 'C100' + mid + '.m4a',
    guid: 5237650124,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    loginUin: 0,
    uin: 0,
    cid: 205361747,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
