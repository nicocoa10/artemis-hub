import Banner from './assets/banner.jpeg'
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <section className='subheader h-40 bg-cover' style={{backgroundImage: `url(${Banner})`}}>
        <h1>TEST</h1>
      </section>
    </div>
  );
}

export default App
