import React from 'react';

import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import BuilderHeader from '@salesforce/design-system-react/components/builder-header';
import BuilderHeaderNav from '@salesforce/design-system-react/components/builder-header/nav';
import BuilderHeaderNavDropdown from '@salesforce/design-system-react/components/builder-header/nav-dropdown';
import BuilderHeaderNavLink from '@salesforce/design-system-react/components/builder-header/nav-link';

const TestNav = (props) => (
	<IconSettings iconPath="/assets/icons">
		<BuilderHeader
			assistiveText={{
				icon: 'Builder',
				backIcon: 'Back',
				helpIcon: 'Help',
			}}
			events={{
				onClickBack: () => console.log('onClickBack'),
				onClickHelp: () => console.log('onClickHelp'),
			}}
			labels={{
				back: 'Back',
				help: 'Help',
				pageType: 'Page Type',
				title: 'App Name',
			}}
			style={{ position: 'relative' }}
		>
			<BuilderHeaderNav>
				<BuilderHeaderNavLink
					assistiveText={{ label: 'Link' }}
					iconCategory="utility"
					iconName="settings"
					label="Link"
					onClick={() => console.log('link/onClick')}
				/>
				<BuilderHeaderNavDropdown
					assistiveText={{ icon: 'Dropdown' }}
					iconCategory="utility"
					iconName="page"
					id="dropdown"
					label="Dropdown"
					options={[
						{ label: 'Menu Item One', value: 'A0' },
						{ label: 'Menu Item Two', value: 'B0' },
					]}
					onSelect={() => console.log('dropdown/onSelect')}
				/>
			</BuilderHeaderNav>
		</BuilderHeader>
	</IconSettings>
);
export default TestNav;