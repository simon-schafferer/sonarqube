/*
 * SonarQube
 * Copyright (C) 2009-2020 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import * as theme from '../../../app/theme';
import { getCurrentL10nBundle } from '../../../helpers/l10n';
import { getBaseUrl } from '../../../helpers/system';
import { ComponentQualifier } from '../../../types/component';

interface Props {
  defaultQualifier?: string;
  onClose: () => void;
  onCreate: (portfolio: { key: string; qualifier: ComponentQualifier }) => void;
}

export default class CreateFormShim extends React.Component<Props> {
  render() {
    const { createFormBuilder } = (window as any).SonarGovernance;
    return createFormBuilder(this.props, {
      theme,
      baseUrl: getBaseUrl(),
      l10nBundle: getCurrentL10nBundle()
    });
  }
}
