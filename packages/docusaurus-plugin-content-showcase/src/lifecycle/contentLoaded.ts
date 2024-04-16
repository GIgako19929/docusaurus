/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {ShowcaseItems} from '@docusaurus/plugin-content-showcase';
import type {PluginContentLoadedActions} from '@docusaurus/types';

export async function processContentLoaded({
  content,
  routeBasePath,
  addRoute,
}: {
  content: ShowcaseItems;
  routeBasePath: string;
  addRoute: PluginContentLoadedActions['addRoute'];
}): Promise<void> {
  addRoute({
    path: routeBasePath,
    component: '@theme/Showcase',
    props: {
      items: content.items,
    },
    exact: true,
  });
}
