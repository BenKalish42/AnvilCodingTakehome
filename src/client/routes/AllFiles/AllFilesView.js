import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Content from 'components/Content'
import FileList from 'components/FileList'
import Button from 'components/Button'
import Toggler from 'components/Toggler'
import IconPlus from 'components/icons/IconPlus'
import IconArrowRight from 'components/icons/IconArrowRight'

import NewFileForm from './NewFileForm'

const StyledContainer = styled.div``

export const SecretFilesToggleContainer = styled.div`
  margin: 20px 0;
`

export const Title = styled.h1`
  margin-bottom: 20px;
`

class AllFilesView extends Component {
  state = {
    showSecretFiles: false,
  }

  handleAddFile = (data) => {
    const { addFile } = this.props
    return addFile(data)
  }

  handleShowSecretFilesClicked = () => {
    this.setState({ showSecretFiles: !this.state.showSecretFiles })
  }

  renderFiles () {
    const { files, secretFiles } = this.props
    const { showSecretFiles } = this.state
    return (
      <Content.Card secretContent={showSecretFiles}>
        <FileList
          files={showSecretFiles ? secretFiles : files}
        />
      </Content.Card>
    )
  }

  renderNewFileForm () {
    return (
      <Toggler
        renderButton={({ showItem, onClick }) => (
          <Button type="link" onClick={onClick}>
            <IconPlus />
            <span>{showItem ? 'Close Add Form' : 'Add a File'}</span>
          </Button>
        )}
      >
        {() => (
          <NewFileForm onSubmit={this.handleAddFile} />
        )}
      </Toggler>
    )
  }

  render () {
    const { username } = this.props
    const { showSecretFiles } = this.state
    return (
      <StyledContainer>
        <Title>{`Hi ${username} 👋`}</Title>
        <SecretFilesToggleContainer>
          <Button type="link" onClick={this.handleShowSecretFilesClicked}>
            <IconArrowRight />
            <span>{showSecretFiles ? 'Show Regular Files' : 'Show Secret Files'}</span>
          </Button>
        </SecretFilesToggleContainer>
        {this.renderFiles()}
        {showSecretFiles ? null : this.renderNewFileForm()}
      </StyledContainer>
    )
  }
}

AllFilesView.propTypes = {
  addFile: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  secretFiles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default AllFilesView
