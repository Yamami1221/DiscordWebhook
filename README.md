# DiscordWebhook

A simple Discord Webhook wrapper using discord.js V14.

## How to use

1. Install node.js
2. Install npm packages

```bash
npm install
```

3.add your content to data.json using the following guide or using [discord guide](https://discordjs.guide/popular-topics/webhooks.html#webhooks)

## Guide 

### Structure of Webhook Body

Second, learn the structure.
All root elements are *optional* unless stated otherwise. Body have to include `content` or `embeds`, otherwise request will fail.

> `element` : `[data type]` - description

* `[string]` - text
  * `[website url]` - ex.: `https://google.com`
    * `[image url]` - ex.: `https://www.w3schools.com/html/pic_mountain.jpg`
* `[array]` - comma-separated elements. ex.: `[1, 2, 3, 4]`
* `[number]` - ex. `1337`, `420.69`, `-1000`, etc.
* `[boolean]` - can be `true` or `false` only.
* `[object]` - can include `key: value`s

* `username` : `[string]` - overrides the default username of the webhook
* `avatar_url` : `[image url]` - overrides the default avatar of the webhook
* `content` : `[string]` - simple message, the message contains (up to 2000 characters)
* `embeds` : `[array]` - array of embed objects. That means, you can use more than one in the same body
  * `author` : `[object]` - embed author object
    * `name` : `[string]` - name of author
    * `url` : `[website url]` - url of author. If `name` was used, it becomes a hyperlink
    * `icon_url` : `[image url]` - url of author icon
  * `title` : `[string]` - title of embed
  * `url` : `[website url]` - url of embed. If `title` was used, it becomes hyperlink
  * `description` : `[string]` - description text
  * `color` : `[number]` - color code of the embed. You have to use Decimal numeral system, not Hexadecimal. Use [color picker](https://www.spycolor.com/)
  * `fields` : `[array]` - array of embed field objects
    * `name` : `[string]` - name of the field
    * `value` : `[string]` - value of the field
    * `inline` : `[boolean]` - if true, fields will be displayed in same line, but there can only be 3 max in same line or 2 max if you used thumbnail
  * `thumbnail` : `[object]` - embed thumbnail object
    * `url` : `[image url]` - url of thumbnail
  * `image` : `[object]` - embed image object
    * `url` : `[image url]` - image url
  * `footer` : `[object]` - embed footer object
    * `text` : `[string]` - footer text, doesn't support Markdown
    * `icon_url` : `[image url]` - url of footer icon

### Example for a webhook

```json
{
  "username": "Webhook",
  "avatar_url": "https://i.imgur.com/4M34hi2.png",
  "content": "Text message. Up to 2000 characters.",
  "embeds": [
    {
      "author": {
        "name": "Birdie♫",
        "url": "https://www.reddit.com/r/cats/",
        "icon_url": "https://i.imgur.com/R66g1Pe.jpg"
      },
      "title": "Title",
      "url": "https://google.com/",
      "description": "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
      "color": 15258703,
      "fields": [
        {
          "name": "Text",
          "value": "More text",
          "inline": true
        },
        {
          "name": "Even more text",
          "value": "Yup",
          "inline": true
        },
        {
          "name": "Use `\"inline\": true` parameter, if you want to display fields in the same line.",
          "value": "okay..."
        },
        {
          "name": "Thanks!",
          "value": "You're welcome :wink:"
        }
      ],
      "thumbnail": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
      },
      "image": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg"
      },
      "footer": {
        "text": "Woah! So cool! :smirk:",
        "icon_url": "https://i.imgur.com/fKL31aD.jpg"
      }
    }
  ]
}
```

### And how it looks

![example](https://i.imgur.com/kvEZU97.png "Example")