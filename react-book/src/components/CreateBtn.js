import React from 'react'
import Icon from 'react-ionicons'

const CreateBtn = ({ onClick }) => (
  <button
    className="btn btn-primary btn-block d-flex justify-content-center align-items-center mt-2"
    onClick={e => {
      onClick(e)
    }}
  >
    <Icon
      className="rounded-circle"
      fontSize="30px"
      color="#fff"
      icon="ios-add-circle"
    />
    创建一条记录
  </button>
)

export default CreateBtn
