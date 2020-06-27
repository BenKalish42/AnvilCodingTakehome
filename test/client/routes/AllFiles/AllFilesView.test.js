import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import AllFilesView, { Title, SecretFilesToggleContainer } from 'client/routes/AllFiles/AllFilesView'

describe('AllFilesView', function () {
  describe('Title', function () {
    it('renders the title', function () {
      const wrapper = shallow(
        <AllFilesView
          username="Sally"
          addFile={() => {}}
          files={[]}
          secretFiles={[]}
        />,
      )

      const title = wrapper.find(Title)
      expect(title).to.have.length(1)
      expect(title.text()).to.equal('Hi Sally 👋')
    })
  })

  describe('Show Secret Files Button', function () {
    it('renders the new button', function () {
      const wrapper = shallow(
        <AllFilesView
          username="Sally"
          addFile={() => {}}
          files={[]}
          secretFiles={[]}
        />,
      )

      const container = wrapper.find(SecretFilesToggleContainer)
      expect(container).to.have.length(1)
      const buttonText = container.find('span')
      expect(buttonText).to.have.length(1)
      expect(buttonText.text()).to.equal('Show Secret Files')
    })
  })
})
