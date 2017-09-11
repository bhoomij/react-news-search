import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header';
import NewsList from './components/news_list';

import JSON from './db.json';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keyword) {
        let filtered = this.state.news.filter((item) => item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1 );

        this.setState({filtered});
    }

    render() {
        return (
            <div>
                {/*<Header newsSearch={(keyword) => this.filterNews(keyword)}/>*/}
                <Header newsSearch={this.filterNews.bind(this)} />
                <NewsList news={this.state.filtered}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));