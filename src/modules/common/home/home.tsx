import React from 'react';

// styles
import './home.scss';

// 3rd libs
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


class Home extends React.Component<any, any> {

	state = {
    collapsed: false,
	};

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {

    return (
			<div id="home">
			<Layout style={{maxHeight:'100vh'}} >
				<Sider
					theme="dark"
					width="100%"
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					collapsedWidth={0}
					breakpoint="sm"
					onBreakpoint={(islessThanBreakpoint) => {console.log(islessThanBreakpoint)}}
				>
					<Icon
						className="trigger close-menu"
						type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={this.toggle}
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
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							background: '#fff',
							minHeight: 1280,
						}}
					>
						Content
          </Content>
				</Layout>
			</Layout>
			</div>
		)
  }
}
export default Home;
