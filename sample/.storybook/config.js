import { configure } from '@storybook/vue'

function loadStories () {
  require('../src/stories/index')
}

configure(loadStories, module)