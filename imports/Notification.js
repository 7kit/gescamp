import { Button, notification, Icon } from 'antd';

export const openNotification = (props) => {
  notification.open({
    message: props.notTitle,
    description: props.contenu,
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

/*ReactDOM.render(
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>,
  mountNode
);*/