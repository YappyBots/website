---
title: Contributing
---

# Contributing to Yappy GitHub

## Clone repo

```sh
$ cd folder/where/i/want/bot
$ git clone https://github.com/YappyBots/YappyGitHub.git
```

## Linting

Please use a Prettier plugin for your editor, and use the current configuration (located in `.prettierc`).

You can automatically lint the code by running `npm run lint`.

## GitHub Events

The different [GitHub events](https://developer.github.com/v3/activity/events/types/) each have their own name, followed by "Event" (the actual webhook event name doesn't include the "Event").

An event may have an action. For example, the event can be an `issue` event, and the action may be `open`.
The file that will be read for the styling of the event is `EVENT-ACTION.js`, everything being lowercase.

## Setting up

Yappy GitHub needs some settings to be set. Copy `.env.example` to `.env` and fill in the settings.

The following settings are required:
- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID` (for the web dashboard)
- `DISCORD_CLIENT_SECRET` (for the web dashboard)

You will also need to run `npm i` to install all dependencies needed.

### SQLite

Run `npm run db:migrate` to create the SQLite database file and run the necessary migrations.

## Running the bot

Yappy GitHub needs to be run with NodeJS v8 or higher.
An example on running the bot:

```sh
$ node lib/index.js
```
