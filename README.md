# rss-to-telegram

Publishes new items from an RSS feed to a telegram chat (group, channel, direct).

## Config

Create a config.json file containing:

```json
{
  "published_database": "published-posts.json",
  "source": {
    "feed": "your-feed-url (with http or https)",
    "refresh_interval": 6000
  },
  "telegram": {
    "token": "your bot token",
    "channel": your chat id
  }
}
```

- `published_database`: The json file that will contain already sent item updates from the feed

- `feed`: URI pointing to the RSS feed

- `refresh_interval`: Delay between two feed update in milliseconds

- `token`: Telegram bot token (get one @BotFather)

- `channel`: Telegram chat id (must be an integer API id)

- `status_monitor_port`: If set, will open a simple webserver that always responds 200 on that port.
   This can be used as a way to determine if this service is still running via e.g. uptime robot.

## Run

1. `npm install`

2. `npm start`
