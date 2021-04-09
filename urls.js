const baseUrl = "https://client-api.gopace.xyz/api/v1";

const urls = {
  serverauth: baseUrl + "/app/client-public-auth",
  getfarecoordinate: baseUrl + "/fare/private-estimate",
  getfareaddress: baseUrl + "/fare/private-estimate",
  trackorder: baseUrl + "/order/track",
  createorder: baseUrl + "/order/private-create",
};

module.exports = urls;
