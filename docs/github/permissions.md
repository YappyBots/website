---
title: GitHub App Permissions
---

# Yappy GitHub App Permissions

When setting up the bot through `/setup`, the site will ask you to sign in with GitHub.

This is temporary & allows the bot to confirm the user has perms in the repositories (enough to install an app!). Installing the app in repositories requires permissions so that the bot can receive events (webhooks) pertaining to those areas.  For example, if the bot doesn't have permission to read PRs in the repository, GitHub doesn't allow it to receive webhooks for PR-related activity.

- **Dependabot Alerts**: dependabot vulnerability alerts
- **Code / Contents**: commit comment, create/delete branch, fork, gollum (wiki), push, release
- **Commit Statuses**: commit statuses (doesn't seem to include workflow commit statuses! likely only external apps)
- **Issues**: issue, milestone
- **Metadata**: meta, label, public, repository, star, watch
- **Pages**: GitHub pages failure events
- **Pull Requests**: pull requests

This data is only "read" when receiving webhooks from GitHub (to convert into Discord embeds for the relevant channels) and when configuring the bot through the `/setup` command.

The only API call ever made is during setup to obtain "Metadata" to retrieve the list of available repositories for an installation. The access token is stored for <30 minutes while the user uses the setup dashboard, and then forgotten. The bot then only stores the Github IDs and names of the installations (users / organizations) and repositories that the user has chosen to use with the bot.

See the [privacy policy](privacy.html) for more information.
