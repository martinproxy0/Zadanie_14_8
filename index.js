import App from './components/App';
//import Gif from './components/Gif';
//import Search from './components/Search';


const root = document.getElementById('app');
const DOM = ReactDOM;

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
          <App />
        );
    }
}

DOM.render(<Main />, root);

