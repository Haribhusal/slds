import React from 'react';

import Button from '@salesforce/design-system-react/components/button';
import ButtonGroup from '@salesforce/design-system-react/components/button-group';
import ButtonStateful from '@salesforce/design-system-react/components/button-stateful';
import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import Icon from '@salesforce/design-system-react/components/icon';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import PageHeader from '@salesforce/design-system-react/components/page-header';
import PageHeaderControl from '@salesforce/design-system-react/components/page-header/control';

class PageHeaderComponent extends React.Component {

	render() {
		const actions = () => (
			<React.Fragment>
				<PageHeaderControl>
					<ButtonStateful
						key="PageHeadrFollowButton"
						iconSize="medium"
						stateOne={{ iconName: 'add', label: 'Add Tag' }}
					/>
				</PageHeaderControl>
				<PageHeaderControl>
					<ButtonGroup variant="list" id="button-group-page-header-actions">
						<Button label="Edit" />
						<Button label="Delete" />
						<Dropdown
							align="right"
							assistiveText={{ icon: 'More Options' }}
							iconCategory="utility"
							iconName="down"
							iconVariant="border-filled"
							id="dropdown-record-home-example"
							options={[
								{ label: 'Menu Item One', value: 'A0' },
								{ label: 'Menu Item Two', value: 'B0' },
								{ label: 'Menu Item Three', value: 'C0' },
								{ type: 'divider' },
								{ label: 'Menu Item Four', value: 'D0' },
							]}
						/>
					</ButtonGroup>
				</PageHeaderControl>
			</React.Fragment>
		);

		const details = [
			{
				label: 'Total Balance',
				content:
					'$2,453,124.65',
				truncate: true,
			},
			{ label: 'Stacked Balance', content: '$3,552,525.97' },
			{
				label: 'Liquid Balance',
				content: '$1,436,815.77',
			},
			{
				label: 'Total Balance',
				content: '$6,623,655.71',
				truncate: true,
			},
            {
				label: '24 Hour Change',
				content: <p style={{color: 'green'}}>+325,453.45(2.45%)</p>,
				truncate: true,
			},
            {
				label: 'Week Change',
				content: <p style={{color: 'green'}}>+341,636.45(8.65%)</p>,
				truncate: true,
			},
            {
				label: 'Month Change',
				content: <p style={{color: 'red'}}>-341,636.45(2.65%)</p>,
				truncate: true,
			}
		];

		return (
			<IconSettings iconPath="/assets/icons">
				<PageHeader
					details={details}
					icon={
						<Icon
							assistiveText={{ label: 'User' }}
							category="standard"
							name="opportunity"
						/>
					}
					label="Accounts"
					onRenderActions={actions}
					title="Trading Wallet"
					variant="record-home"
				/>
			</IconSettings>
		);
	}
}
export default PageHeaderComponent;