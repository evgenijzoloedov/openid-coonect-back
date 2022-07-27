import axios from "axios"


export const yandexApi = axios.create({
  baseURL:"https://storage.api.cloud.yandex.net/storage/v1/buckets",
  headers:{
    // "Authorization":`Bearer ${process.env.YANDEX_TOKEN}`,
    "Content-Type": "application/json",

    "Authorization":`Bearer t1.9euelZqLl5WdkZnKnYuRyZGSnpGRy-3rnpWajY3JmIySk5WOyJyPypLGkI3l8_c_LVps-e8WAC9f_t3z939bV2z57xYAL1_-.eF3-eLXvorez5PHZ1lp3hf0Ri9Uius6R8pCUwXeszQFviXRDTPM3YxUsgdAJT_p6wP8yHV4aA7S6TLPeFVkwCg`
  }
})