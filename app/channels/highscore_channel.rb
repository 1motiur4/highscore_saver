class HighscoreChannel < ApplicationCable::Channel
  def subscribed
    stream_from "highscore_channel"
  end

  def receive(data)
    puts "OMG DATA"
    p

    my_data = { bye: "bye ms american pie"}
    ActionCable.server.broadcast("highscore_channel", my_data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
