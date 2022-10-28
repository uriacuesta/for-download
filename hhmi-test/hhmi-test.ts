import {LitElement, html, css, unsafeCSS } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './hhmi-test.css?raw';

export interface HhmiTestProps {
  heading: string;
}

/**
 * The hhmi-test element.
 *
 * @slot - slotted content.
 */
@customElement('hhmi-test')
export class HhmiTest extends LitElement implements HhmiTestProps {
  static override styles = css`${unsafeCSS(styles)}`;
 
  /**
  * heading
  */
  @property({type: String})
  heading = 'test';

  /**
  * The number of times the button has been clicked.
  */
  @property({type: Number})
  count = 0;

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  override render() {
    return html`
      <div>
        <button @click=${this._onClick} part="button">
          Button Click Count: ${this.count}
        </button>
        <div>heading: ${this.heading}</div>
        <slot></slot>
      </div>
    `;
  }
}
 
declare global {
  interface HTMLElementTagNameMap {
    'hhmi-test': HhmiTest;
  }
}
