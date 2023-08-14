// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '../test-setup.ts'

import App from './App.tsx'

// Integration:
// - Is not very isolated
// - Tests multiple modules
// - Resilient to refactors
test('Renders two dogs', () => {
  render(<App />)
  // https://testing-library.com/docs/queries/about
  const headings = screen.queryAllByRole('heading')

  expect(headings).toHaveLength(3)
  expect(headings[1]).toHaveTextContent('Desdemona')
})

test('Renders a spinning paw print', () => {
  render(<App />)

  const image = screen.getByAltText('a spinning paw-print')
  expect(image).toBeVisible()
})
