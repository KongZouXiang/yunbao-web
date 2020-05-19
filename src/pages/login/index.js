import { Layout } from 'antd';

const { Header, Tabs,TabPane,Footer, Content } = Layout;

/*const callback=(key)=> {
  console.log(key); onChange={callback}
}*/
export default function() {




  return (
    /* backgroundImage: '@/home_bg.png', */
    <div style={{height: '100vh' }}>
      <Layout>
        <Header style={{ background: 'transparent', height: '20vh', textAlign: 'center', marginTop:'10vh'}}>
          <h1>最有潜力的框架</h1>
          <font> Ant Design 是西湖区最具影响力的 Web 设计规范</font>
        </Header>
        <Content style={{ background: '', height: '20vh', textAlign: 'center', }}>
          <div style={{marginTop:'100px'}}>


            <Tabs  type="card">
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </Content>
        <Footer
          style={{ background: 'transparent', height: '20vh', textAlign: 'center' }}
        >Footer</Footer>
      </Layout>
    </div>
  );
}
