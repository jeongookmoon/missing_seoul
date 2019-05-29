import React from "react"
import "./navbar_style.css"
import { ENG_MENU, KOR_MENU } from "./menu_list"

class NavBar extends React.Component {

  state = {
    menu_items: ENG_MENU
  }

  switchItemLanguage = (event) => {
    const { name } = event.target
    const currentLanguage = this.state.menu_items[name]
    const newItemName = (currentLanguage === ENG_MENU[name]) ? KOR_MENU[name] : ENG_MENU[name]
    this.setState(prevState => ({
      menu_items: {
        ...ENG_MENU,
        [name]: newItemName
      }
    }))
  }

  render() {
    const { attraction, culture, food, post } = this.state.menu_items
    return (
      <div className="navbar">
        <div className="menu">
          <h1><a href="#" className="menu_item menu_title">Missing Seoul</a></h1>
          <ul>
            <li><a href="#" className="menu_item menu_list" name="attraction"
              onMouseLeave={this.switchItemLanguage}>{attraction}</a></li>
            <li ><a href="#" className="menu_item menu_list" name="culture"
              onMouseLeave={this.switchItemLanguage}>{culture}</a></li>
            <li><a href="#" className="menu_item menu_list" name="food"
              onMouseLeave={this.switchItemLanguage}>{food}</a></li>
            <li><a href="#" className="menu_item menu_list" name="post"
              onMouseLeave={this.switchItemLanguage}>{post}</a></li>
          </ul>
        </div>
      </div>
    )
  }
}


export default NavBar
