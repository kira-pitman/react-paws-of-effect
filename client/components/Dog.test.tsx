// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '../test-setup.ts'

import Dog from './Dog.tsx'

// Unit:
// - Are very isolated
// - Test a single module
// - Fragile to refactors
test("Renders <Dog /> with dog's name", () => {
  render(<Dog name="Jake" breed="scottie" superpower="Laser beam eyes" />)

  const heading = screen.getByRole('heading')
  expect(heading).toHaveTextContent('Jake')
})

test('Renders <Dog /> with a sillhouette of the breed', () => {
  render(<Dog name="Jake" breed="scottie" superpower="Laser beam eyes" />)

  const image = screen.getByAltText('Jake, a scottie')
  expect(image).toHaveAttribute('src', '/images/scottie.png')
})