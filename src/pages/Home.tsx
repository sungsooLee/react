import Layout from '../components/layout/Layout'
import cn from 'classnames'
import styles from './Home.module.scss'

const Home = () => (
    <Layout headerType="type1" footerType="type1">
      <div className={cn(styles.home)}>
        <h2>Home Page</h2>
        <p>Home 콘텐츠입니다.</p>
      </div>
    </Layout>
);
export default Home;


