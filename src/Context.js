import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext("my name is oshan");
class RoomProvider extends Component {
  state = {
    articles: [],
    sortedArticles: [],
    featuredArticles: [],
  };
  componentDidMount() {
    let articles = this.formetData(items);
    let featuredArticles = articles.filter((room) => room.featured === true);

    this.setState({
      articles,
      featuredArticles,
      sortedArticles: articles,
    });
  }

  formetData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let articles = { ...item.fields, images, id };
      return articles;
    });

    return tempItems;
  }
  getArticle = (slug) => {
    let tempArticles = [...this.state.articles];
    const article = tempArticles.find((article) => article.slug === slug);

    return article;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{ ...this.state, getArticle: this.getArticle }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
// fro using with functional component (this is combination symbol.. reference in RoomsContainer.js..)
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
//jhgkh

export { RoomProvider, RoomConsumer, RoomContext };
