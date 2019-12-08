import React from 'react';

// styles
import './IqNavigation.scss';

// 3rd libs
import { Layout, Menu, Icon, Carousel, Card, Button } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const SideNavigation = withRouter((props: any) => {
	const {collapsed, toggleSideNavigation, onBreakpoint, history, selectedKeys} = props;
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
			<Menu
				theme="dark"
				mode="inline" 
				selectedKeys={selectedKeys}
			>
				<Menu.Item key="home" onClick={() => {history.push('/')}}>Home</Menu.Item>
				<Menu.Item key="magazine" onClick={() => {history.push('/magazine')}}>Magazine</Menu.Item>
				<Menu.Item key="umrah" onClick={() => {history.push('/umrah')}}>Umrah</Menu.Item>
				<Menu.Item key="scholarships" onClick={() => {history.push('/scholarships')}}>Scholarships</Menu.Item>
				<Menu.Item key="locals" onClick={() => {history.push('/locals')}}>Locals</Menu.Item>
				<Menu.Item key="news-activities" onClick={() => {history.push('/news-activities')}}>News &amp; Activities</Menu.Item>
				<Menu.Item key="donations" onClick={() => {history.push('/donations')}}>Donations</Menu.Item>
				<Menu.Item key="classifieds" onClick={() => {history.push('/classifieds')}}>Classifieds</Menu.Item>
			</Menu>
		</Sider>
	);
});

const TopNavigation = withRouter((props: any) => {
	const {collapsed, toggleSideNavigation, history, selectedKeys} = props;
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
				selectedKeys={selectedKeys}
				className="top-menus"
			>
				<Menu.Item key="home" onClick={() => {history.push('/')}}>Home</Menu.Item>
				<Menu.Item key="magazine" onClick={() => {history.push('/magazine')}}>Magazine</Menu.Item>
				<Menu.Item key="umrah" onClick={() => {history.push('/umrah')}}>Umrah</Menu.Item>
				<Menu.Item key="scholarships" onClick={() => {history.push('/scholarships')}}>Scholarships</Menu.Item>
				<Menu.Item key="locals" onClick={() => {history.push('/locals')}}>Locals</Menu.Item>
				<Menu.Item key="news-activities" onClick={() => {history.push('/news-activities')}}>News &amp; Activities</Menu.Item>
				<Menu.Item key="donations" onClick={() => {history.push('/donations')}}>Donations</Menu.Item>
				<Menu.Item key="classifieds" onClick={() => {history.push('/classifieds')}}>Classifieds</Menu.Item>
			</Menu>
		</Header>
	)
})

class IqNavigation extends React.Component<any, any> {

	state = {
		collapsed: true,
		activeMenu: ''
	};

  toggleSideNavigation = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
	};

	onBreakpoint = (islessThanBreakpoint: boolean) => {
		// md: 768px
	}

	componentDidMount() {
		this.setActivePage()
	}

	setActivePage() {
		if (this.props.match.url.lastIndexOf('/magazine') == 0) {
			this.setState({activeMenu: 'magazine'})
		} else if (this.props.match.url.lastIndexOf('/umrah') == 0) {
			this.setState({activeMenu: 'umrah'})
		} else if (this.props.match.url.lastIndexOf('/scholarships') == 0) {
			this.setState({activeMenu: 'scholarships'})
		} else if (this.props.match.url.lastIndexOf('/locals') == 0) {
			this.setState({activeMenu: 'locals'})
		} else if (this.props.match.url.lastIndexOf('/news-activities') == 0) {
			this.setState({activeMenu: 'news-activities'})
		} else if (this.props.match.url.lastIndexOf('/donations') == 0) {
			this.setState({activeMenu: 'donations'})
		} else if (this.props.match.url.lastIndexOf('/classifieds') == 0) {
			this.setState({activeMenu: 'classifieds'})
		} else {
			this.setState({activeMenu: 'home'})
		}
	}
  
  render() {

    return (
			<Layout id="iq-navigation">
				<SideNavigation
					collapsed={this.state.collapsed}
					toggleSideNavigation={this.toggleSideNavigation}
					onBreakpoint={this.onBreakpoint}
					selectedKeys={[this.state.activeMenu]}
				/>
				<Layout>
					<TopNavigation
						collapsed={this.state.collapsed}
						toggleSideNavigation={this.toggleSideNavigation}
						selectedKeys={[this.state.activeMenu]}
					/>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 'auto',
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		)
  }
}

export default withRouter(IqNavigation);
