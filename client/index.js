const axios = require("axios").default;
const urls = require("../urls");

class Client {
  constructor(private_key) {
    this.private_key = private_key;
    this.token;
  }
  async init() {
    try {
      const response = await axios({
        method: "POST",
        url: urls.serverauth,
        data: {
          private_key: this.private_key,
        },
      });
      const clientResponse = await response.json();
      this.token = clientResponse.token;
    } catch (e) {}
  }
  async getFareEstimateAddress(pickup_address, delivery_address) {
    try {
      const response = await axios({
        method: "POST",
        url: urls.getfareaddress,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          pickup_address,
          delivery_address,
        },
      });
      const clientResponse = await response.json();
      return clientResponse;
    } catch (e) {}
  }
  async getFareEstimateCoordinate(pickupCoord, deliveryCoord) {
    try {
      const response = await axios({
        method: "POST",
        url: urls.getfarecoordinate,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          pickup_lat: pickupCoord.lat,
          pickup_long: pickupCoord.long,
          destination_lat: deliveryCoord.lat,
          destination_long: deliveryCoord.long,
        },
      });
      const clientResponse = await response.json();
      return clientResponse;
    } catch (e) {}
  }
  async createOrder(createOrderBody) {
    try {
      const response = await axios({
        method: "POST",
        url: urls.createorder,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          ...createOrderBody,
        },
      });
      const createOrderResponse = await response.json();
      return createOrderResponse;
    } catch (e) {}
  }
  async trackOrder(tracking_code) {
    try {
      const response = await axios({
        method: "POST",
        url: urls.trackorder,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        data: {
          tracking_code,
        },
      });
      const trackOrderResponse = await response.json();
      return trackOrderResponse;
    } catch (e) {}
  }
}

module.exports = Client;
