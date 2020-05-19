import styles from './index.css';
import {getUserById} from '@/services/login'
import {Button} from 'antd';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Button type={'primary'} onClick={()=>getUserById("1257245581626056706")}>点击</Button>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
