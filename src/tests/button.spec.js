import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/atoms/Button';

describe('Button test', () => {
  test('Button contains Facebook text', () => {

    const component = renderer.create(
      <Button>Facebook</Button>,
    );
    let button = component.toJSON()
    expect(button.children.includes('Facebook')).toBe(true)
  })
})
