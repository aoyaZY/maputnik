import React from 'react'
import PropTypes from 'prop-types'

import InputBlock from '../inputs/InputBlock'
import StringInput from '../inputs/StringInput'

class MetadataBlock extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return <InputBlock
      label={"Comments"}
      doc={"图层的注释。这不常用也不属于标准规范"}
      data-wd-key="layer-comment"
    >
      <StringInput
        multi={true}
        value={this.props.value}
        onChange={this.props.onChange}
        default="Comment..."
      />
    </InputBlock>
  }
}

export default MetadataBlock
