// @flow

import React from 'react';
import MarkdownDocs from 'metadata-react/Markdown/MarkdownDocs';
import markdown from './About.md';
import {description} from '../App/menu_items';

export default function Page() {
  return <MarkdownDocs key="text" markdown={markdown} subtitle="common-catalogs" descr={description} canonical="/about"/>;
}
