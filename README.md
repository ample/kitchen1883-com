# README

##This project is using Ruby on Rails and Ample Admin.

##It is hosted on Heroku.
  Heroku has a staging app and a production app:
  - https://dashboard.heroku.com/apps/kitchen1883-staging
  - https://dashboard.heroku.com/apps/kitchen1883-com

These are the commands to add the heroku branches to your local project

```
$ heroku git:remote -a kitchen1883-com
$ git remote rename heroku production
$ heroku git:remote -a kitchen1883-staging
$ git remote rename heroku staging
```

##To pull down production database

```
$ be rails db:create
$ heroku pg:backups:download -r production
$ pg_restore --verbose --clean --no-acl --no-owner -h localhost -d kitchen1883_development < latest.dump
```

Ask someone for the `config/application.yml` for the sensitive information not on Github.
