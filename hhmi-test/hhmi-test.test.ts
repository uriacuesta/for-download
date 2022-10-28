// Do not import other web-components in this test.
import { html, fixture, assert} from '@open-wc/testing';
import 'compiled-components';

suite('hhmi-test', () => {
  test('Web Component should exist with shadow dom', async () => {
    const el = await fixture(html`<hhmi-test>content</hhmi-test>`);

    assert.exists(el.shadowRoot);
  });

  test('Renders with default values', async () => {
    const el = await fixture(html`<hhmi-test>content</hhmi-test>`);

    // Uncomment console.log for debugging
    // console.log(el.shadowRoot?.innerHTML,'component-element');
    //
    // Alternative tests
    // assert.equal(el.getAttribute('heading'), 'test');
    // assert.exists(el.shadowRoot?.querySelector('button'));
    
    assert.shadowDom.equal(el, `
      <div>
        <button part="button">
          Button Click Count: 0
        </button>
        <div>heading: test</div>
        <slot></slot>
      </div>
    `);
  });

  test('Renders with parameter values', async () => {
    const el = await fixture(html`<hhmi-test heading="Alice">content</hhmi-test>`);
    
    // Uncomment console.log for debugging
    // console.log(el.shadowRoot?.innerHTML,'component-element-with-parameters');
    assert.shadowDom.equal(el, `
      <div>
        <button part="button">
          Button Click Count: 0
        </button>
        <div>heading: Alice</div>
        <slot></slot>
      </div>
    `);
  });

  test('Passes the a11y audit', async () => {
    const el = await fixture(html`<hhmi-test>content</hhmi-test>`);

    await assert.isAccessible(el);
  });
});
