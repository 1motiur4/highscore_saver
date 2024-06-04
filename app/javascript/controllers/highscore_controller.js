import { Controller } from "@hotwired/stimulus";
import consumer from "channels/consumer";

export default class extends Controller {
  connect() {
    this.channel = consumer.subscriptions.create(
      {
        channel: "HighscoreChannel",
      },
      {
        connected: this._connected.bind(this),
        received: this._received.bind(this),
        disconnected: this._disconnected.bind(this),
      }
    );
  }

  _connected() {
    console.log("Connected to highscore channel");
    const data = { hello: "world" };
    this.channel.send(data);
  }

  _received(data) {
    console.log("Received data", data);
  }

  _disconnected() {
    console.log("Disconnected from highscore channel");
  }
}
