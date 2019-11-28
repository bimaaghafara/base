import React, { Fragment } from 'react';
import './congratulation.scss';
import { Button } from 'antd';

// components


class Congratulation extends React.Component<any, any> {
  
  render() {

    return (
      <div id="congratulation-page">
				<div className="congratulation-form">
					<h2>Congratulation</h2>
					<p>
						Your new account has been created successfully.
					</p>
					<div>
						<Button
							type="primary"
							htmlType="submit"
							className="proceed-button"
							onClick={() => {}}>
							Proceed
						</Button>
					</div>
				</div>
			</div>
    );
  }
}
export default Congratulation;
