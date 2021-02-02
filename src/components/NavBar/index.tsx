import React from 'react';
import { Icon, NavBar } from 'antd-mobile';
import './index.less';
import styles from './index.less';

interface IProps {
  onLeftClick?: () => void;
  content: string;
  rightContent?: any;
}

const MNavBar: React.FC<IProps> = ({
  onLeftClick, content, rightContent
}) => {
  return (
    <div className={styles.navbar}>
      <NavBar
        mode="light"
        leftContent={[
          <Icon key={1} type="left" />,
          <span key={2}>返回</span>
        ]}
        onLeftClick={onLeftClick && onLeftClick}
        rightContent={rightContent && rightContent}
      >
        {content}
      </NavBar >
    </div>
  )
}

export default MNavBar;
