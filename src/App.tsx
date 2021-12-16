import AokiButton from './components/button/button'
import AokiAlert from './components/alert/alert'
function App() {
  const onChange = () => {
    alert('点击关闭了')
  }
  return (
    <div className="App">
      <header className="App-header">
        <code>
          hello react
        </code>
        {/* <aokiButton /> */}
        <AokiButton btnType={'link'} btnSize={'sm'} href="http://www.baidu.com/">button</AokiButton>
        <AokiButton btnType={'primary'} btnSize={'sm'}>button</AokiButton>
        <AokiButton btnType={'danger'}>button</AokiButton>
        <AokiButton btnType={'primary'} btnSize={'lg'}>button</AokiButton>
        {/* <AokiAlert /> */}
        <AokiAlert type="success" closable={true} closeText="hidden" onChange={onChange}>i im is lixiaoxu</AokiAlert>
        <AokiAlert type="info" >I don't have anything</AokiAlert>
        <AokiAlert type="warning" closable={true} closeText="关闭">我是随便输入的</AokiAlert>
        <AokiAlert type="error" closable={true} ></AokiAlert>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
