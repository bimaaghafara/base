import React from 'react';

// styles
import './home.scss';

// 3rd libs
import { Carousel, Card, Button, Form, Modal, Input, Radio } from 'antd';
import IqNavigation from '../../../shared/ui/iq-navigation/IqNavigation';

const SubscriptionModal: any = Form.create({ name: 'form_in_modal' })(
  class extends React.Component<any, any> {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

class Home extends React.Component<any, any> {

	state = {
		visible: false
	};

	formRef: any;

	showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err: any, values: any) => {
		if (err) {
			return;
		}

		console.log('Received values of form: ', values);
		form.resetFields();
		this.setState({ visible: false });
		});
	};

	saveFormRef = (formRef: any) => {
		this.formRef = formRef;
	};
  
  render() {
    return (
			<IqNavigation>
				<div id="home">
					<h1>Welcome to Muslim Community Network</h1>
					<Carousel autoplay>
						<div>
							<Card className="transparent">
								<h1>Win an Umrah</h1>
								<Button type="primary" size="large" onClick={this.showModal}>
									Enroll me
								</Button>
								<Button type="danger" size="large">
									I want to Sponsor
								</Button>
							</Card>
						</div>
						<div>
							<Card className="transparent">
								<h1>Win a Sholarships</h1>
								<Button type="primary" size="large" onClick={this.showModal}>
									Learn More
								</Button>
							</Card>
						</div>
					</Carousel>
				</div>

				<SubscriptionModal
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
			</IqNavigation>
		)
	}
}

export default Home;
