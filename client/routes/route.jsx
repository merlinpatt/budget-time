import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

import Layout from '../Layout';

const route = ({content, name, path}) => {
  const Content = content;
  FlowRouter.route(path, {
    name,
    action(routeParams, queryParams) {
      mount(Layout, {
        content: (<Content {...routeParams} {...queryParams} />),
      });
    },
  });
};

export default route;
