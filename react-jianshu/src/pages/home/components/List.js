import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import actionCreators from '../store/actionCreators'
class List extends PureComponent {
  render() {
    let { list, listPage, getMoreList } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <Link to="/detail">
            <ListItem key={index}>
              {/* key={item.get('id')} */}
              <img className="pic" src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desp')}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore
          onClick={() => {
            getMoreList(listPage)
          }}
        >
          更多文字
        </LoadMore>
        {/* 加载更多 */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.home.get('articleList'),
    listPage: state.home.get('listPage')
  }
}

const mapDistpatch = dispatch => {
  return {
    getMoreList(listPage) {
      dispatch(actionCreators.getMoreList(listPage))
    }
  }
}

export default connect(
  mapState,
  mapDistpatch
)(List)
