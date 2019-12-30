import React from 'react';

// styles
import './iq-navigation.scss';

// 3rd libs
import { Layout, Menu, Icon, Carousel, Card, Button } from 'antd';
import { withRouter, Link } from 'react-router-dom';
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
				<Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
				<Menu.Item key="magazine"><Link to='/magazine'>Magazine</Link></Menu.Item>
				<Menu.Item key="umrah"><Link to='/umrah'>Umrah</Link></Menu.Item>
				<Menu.Item key="scholarships"><Link to='/scholarships'>Scholarships</Link></Menu.Item>
				<Menu.Item key="locals"><Link to='/locals'>Locals</Link></Menu.Item>
				<Menu.Item key="news-activities"><Link to='/news-activities'>News &amp; Activities</Link></Menu.Item>
				<Menu.Item key="donations"><Link to='/donations'>Donations</Link></Menu.Item>
				<Menu.Item key="classifieds"><Link to='/classifieds'>Classifieds</Link></Menu.Item>
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
				<Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
				<Menu.Item key="magazine"><Link to='/magazine'>Magazine</Link></Menu.Item>
				<Menu.Item key="umrah"><Link to='/umrah'>Umrah</Link></Menu.Item>
				<Menu.Item key="scholarships"><Link to='/scholarships'>Scholarships</Link></Menu.Item>
				<Menu.Item key="locals"><Link to='/locals'>Locals</Link></Menu.Item>
				<Menu.Item key="news-activities"><Link to='/news-activities'>News &amp; Activities</Link></Menu.Item>
				<Menu.Item key="donations"><Link to='/donations'>Donations</Link></Menu.Item>
				<Menu.Item key="classifieds"><Link to='/classifieds'>Classifieds</Link></Menu.Item>
			</Menu>
		</Header>
	)
})

class _IqNavigation extends React.Component<any, any> {

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

export const IqNavigation = withRouter(_IqNavigation);
