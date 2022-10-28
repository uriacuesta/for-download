import {LitElement, html, css, unsafeCSS } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './hhmi-homepage.css?raw';

export interface HhmiHomepageProps {
  heading: string;
}

/**
 * The hhmi-homepage element.
 *
 * @slot - slotted content.
 */
@customElement('hhmi-homepage')
export class HhmiHomepage extends LitElement implements HhmiHomepageProps {
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
    'hhmi-homepage': HhmiHomepage;
  }
}
