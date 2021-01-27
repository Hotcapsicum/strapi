'use strict';

const { capitalize } = require('lodash/fp');

const actions = ['create', 'read', 'update', 'delete'].map(uid => ({
  section: 'plugins',
  subCategory: 'settings',
  pluginName: 'i18n',
  displayName: capitalize(uid),
  uid: `locale.${uid}`,
}));

module.exports = () => {
  const { actionProvider } = strapi.admin.services.permission;
  actionProvider.register(actions);
};
