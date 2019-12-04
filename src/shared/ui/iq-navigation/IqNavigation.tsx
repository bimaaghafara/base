import React from 'react';

// styles
import './IqNavigation.scss';

// 3rd libs
import { Layout, Menu, Icon, Carousel, Card, Button } from 'antd';
const { Header, Sider, Content } = Layout;


const SideNavigation = (props: any) => {
	const {collapsed, toggleSideNavigation, onBreakpoint} = props;
	return (
		<Sider
			className='side-navigation'
			theme="dark"
			width="100%"
			trigger={null}
			collapsible
			collapsed={collapsed}
			collapsedWidth={0}
			breakpoint="md"
			onBreakpoint={(islessThanBreakpoint) => {onBreakpoint(islessThanBreakpoint)}}
		>
			<Icon
				className="toggle-side-navigation close-menu"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggleSideNavigation}
			/>
			<div className="logo"/>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1">
					<Icon type="user" />
					<span>nav 1</span>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="video-camera" />
					<span>nav 2</span>
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="upload" />
					<span>nav 3</span>
				</Menu.Item>
			</Menu>
		</Sider>
	);
}

const TopNavigation = (props: any) => {
	const {collapsed, toggleSideNavigation} = props;
	return (
		<Header className="top-navigation">
			<Icon
				className="toggle-side-navigation"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggleSideNavigation}
			/>
			<div className="logo"/>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				className="top-menus"
			>
				<Menu.Item key="1">Home</Menu.Item>
				<Menu.Item key="2">Magazineeee</Menu.Item>
				<Menu.Item key="3">Umrah</Menu.Item>
				<Menu.Item key="4">Scholarships</Menu.Item>
				<Menu.Item key="5">Locals</Menu.Item>
				<Menu.Item key="6">News &amp; Activities</Menu.Item>
				<Menu.Item key="7">Donations</Menu.Item>
				<Menu.Item key="8">Classifieds</Menu.Item>
			</Menu>
		</Header>
	)
}

class IqNavigation extends React.Component<any, any> {

	state = {
    collapsed: true,
	};

  toggleSideNavigation = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
	};

	onBreakpoint = (islessThanBreakpoint: boolean) => {
		// md: 768px
	}
  
  render() {

    return (
			<Layout id="iq-navigation">
				<SideNavigation
					collapsed={this.state.collapsed}
					toggleSideNavigation={this.toggleSideNavigation}
					onBreakpoint={this.onBreakpoint}
				/>
				<Layout>
					<TopNavigation
						collapsed={this.state.collapsed}
						toggleSideNavigation={this.toggleSideNavigation}
					/>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 1280,
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		)
  }
}

export default IqNavigation;
