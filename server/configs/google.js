import {Meteor} from 'meteor/meteor';
import {ServiceConfiguration} from 'meteor/service-configuration';

Meteor.startup(() => {
  if (Meteor.settings.Google && ! ServiceConfiguration.configurations.findOne({service: 'google'})) {
    const {clientId, clientSecret: secret} = Meteor.settings.Google;
    ServiceConfiguration.configurations.insert({service: 'google', clientId, secret, loginStyle: 'popup'});
  }
});
