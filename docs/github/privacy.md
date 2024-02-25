---
title: Privacy Policy
---

# Yappy GitHub Privacy Policy

## General

Yappy GitHub is a bot that forwards GitHub events to Discord channels. It does this by using webhooks to receive events from GitHub, and then sends messages to Discord channels based on the configuration set by the user.

The bot is designed to be as privacy-friendly as possible, and only stores the data necessary to provide the service. This data is only used to provide the service described above with the best possible quality.

::: tip Summary

To be concise, Yappy GitHub stores the following data in its server:

* **short term**:
  * channel & guild data from Discord
* **longer term**:
  * channel & guild IDs
  * channel configuration options (may include GitHub users, branches, repo names, secrets, and more)
  * GitHub installation & repository IDs and names

It may send Discord IDs and GitHub IDs/names to Sentry for debugging purposes.
:::

The following data is generally stored by Yappy GitHub:

* **Discord Channel & Guild Data**
  * These are cached for 12 hours max since the last visit to a setup or hook page or an incoming webhook to a relevant channel
  * These may be reported to Sentry for debugging purposes
  * **Channel IDs** are used to send the events to those channels
    * These are used to retrieve per-channel configuration options from the database
    * A channel ID is saved to the database for per-channel configuration purposes when running certain commands
    * The channel ID is used to match incoming webhooks to the intended channels (whether connected through the GitHub App or a specific hook URL)
  * **Guild ID** is used to store a global configuration for the guild & maps each channel ID to its guild
  * **Channel types** are used to avoid sending webhooks to non-text or DM channels
  * **Guild ID & owner ID** are used to report permission issues to the guild owner
* **Webhook Payloads** are sent by GitHub and parsed to be sent to the channels
  * Sensitive payload data (excluding for Sentry detailed below) is not stored outside of the request flow, and only used to create messages to send to Discord
  * The repo & org name, event type, and delivery ID may be reported to Sentry for debugging purposes
* **Channel Configuration** is used to allow users to ignore events with finer control than GitHub's built-in options
  * These are stored in a database, and may be reported to Sentry for debugging purposes
  * The channel ID and guild ID are saved to a SQLite DB alongside the options configured by the user when the `/conf` command is ran
  * This data may include GitHub users, branches, repo names, secrets, and more, provided by the user for event filtering purposes
  * This data is deleted when the bot loses access to the channel

In the event of an error that occurs while processing a webhook (whether yours or someone else's around the same time), the data reported to Sentry will be visible to the team.  
This data may be able to link GitHub resources to Discord channels and users, but will not be used for any other purpose than debugging problems. View Sentry's privacy policy [here](https://sentry.io/privacy/).

This data is solely used to provide the service described above with the best possible quality.

## GitHub App

Yappy only stores the GitHub IDs and names of installations (users / organizations) and repositories that the user chooses to configure.

The ID is used to match the incoming webhooks to the intended channels. The name is stored simply for debugging purposes, and it is not kept updated (it is only updated when the bot is reconfigured).

The following data is processed (in addition to [above](#general)) when using the GitHub App:

* **Webhook Payloads**
  * These are visible to the team _in full_ in the event of an error in the GitHub App's recent deliveries page. GitHub shows it for an unknown amount of time (I believe less than a week), and then it is deleted.
  * This data, if accessed, may be used to link GitHub resources to Discord channels and users, but will not be used for any other purpose than debugging problems.
  * The behavior is similar to a GitHub webhook's recent deliveries list, except that it shows webhooks for all the app's installations instead of an individual organization or repository.
  * A **webhook secret** is used to verify the authenticity of the incoming webhook
* **Access Tokens** are stored for <30 minutes while the user uses the setup/purge dashboard, and then forgotten
  * The only API call ever made is during setup to obtain "Metadata" to retrieve the list of available repositories for an installation
  * The access token is stored for <30 minutes while the user uses the setup/purge dashboard, and then forgotten
  * This access token only has read permissions and cannot be used to modify any GitHub resources
* **Github IDs & Names of Installations & Repositories**
  * These are stored in a SQLite DB alongside the options configured by the user when the `/setup` command is ran
  * This data is deleted when the bot loses access to the channel
  * The ID is used to match the incoming webhooks to the intended channels
  * The name is used for display purposes in the setup dashboard (in case GitHub became disconnected) and for debugging purposes

## Channel(s) Specific Hook

By configuring a webhook with Yappy GitHub through `/hook/legacy` or `/hook/channels/:ids`, you agree to the following regarding your data (in addition to [above](#general)):

* **Discord Channel & Guild Data**
  * **Channel IDs** are included in the hook URL, and used to send the events to those channels
  * **Channel name & type; guild name & icon** are used to display the info in the `/hook/channel/:ids` page
* **Webhook Payloads**
  * The **webhook secret** (which is auto-generated or user-provided) is used to
    * Ignored if using the legacy endpoint
    * Verify the authenticity of the incoming webhook
    * Make sure the owner of the GitHub resources wants their events forwarded to Discord channels
