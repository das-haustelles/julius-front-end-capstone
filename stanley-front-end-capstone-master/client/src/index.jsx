// this is the entry point for webpack
import SearchBar from './App.jsx'

window.SearchBar = SearchBar;
ReactDOM.render(<SearchBar/>, document.getElementById('app'))