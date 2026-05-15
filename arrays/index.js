// load-test.js

import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 1500000, // virtual users
  duration: "30s",
};

export default function () {
  const res = http.get("https://google.com");

  console.log(res.status);

  sleep(1);
}
