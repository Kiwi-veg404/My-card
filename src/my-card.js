import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The secret PSU HAXER!!!";
    this.description = "Join us, and HAX PSU.EDU!";
    this.imageUrl = "https://btopro.com/files/headshot603198.jpg";
    this.linkUrl = "https://hax.psu.edu";
    this.btnDesc = "Hax In";
    this.fancy = false;
    this.colorWhite = false;
  }

  static get styles() {
    return css`
      :host{
        display: inline-block;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
      }

      :host([fancy]) {
        display: inline-block;
        border: 4px dashed purple;
        background-color: pink;
      }

      a {
        text-decoration: none;
      }

      #cardlist {
        display: flex;
      }

      .card {
        background-color: black;
        border: 16px solid green;
        padding: 100px 12px;
        margin: 8px;
        height: 300px;
        max-width: 300px;
      }
    
      .card [colorWhite] {
        color: white
      }

      .title {
        background-color: green;
        color: white;
        padding: 12px;
        margin: auto;
        height: 40px;
        max-width: 200px;
        text-align: center;
        //overflow: hidden;
        //text-overflow: ellipsis;
        //white-space: nowrap;
      }

      .image {
        background-size: cover; 
        margin: auto;
        height: 150px;
        max-width: 270px;
        padding: 12px;
      }

      .des {
        background-color: green;
        color: white;
        padding: 12px;
        margin: auto;
        height: 40px;
        max-width: 200px;
        text-align: center;
        //overflow: hidden;
        //text-overflow: ellipsis;
        //white-space: nowrap;
      }

      .btn {
        background-color: blue;
        color: white;
        font-size: 20px;
        border-radius: 10%;
        padding: 16px;
        margin: 4px 4px 4px 32px;
        border: none;
        cursor: pointer;
      }

      .btn:focus,
      .btn:hover {
        background-color: green;
      }

      @media screen and (min-width: 500px) and (max-width: 800px) {
        .title {
          display: none;
        }
        .image {
          display: none;
        }
        .des {
          display: none;
        }
      }

      @media screen and (min-width: 0px) and (max-width: 500px) {
        .title {
          background-color: green;
          color: white;
          padding: 12px;
          margin: auto;
          height: 20px;
          max-width: 50%;
        }
        
        .image {
          background-size: cover; 
          margin: auto;
          height: 100px;
          max-width: 180px;
        }

        .des {
          background-color: green;
          color: white;
          padding: 12px;
          margin: auto;
          height: 20px;
          max-width: 200px;
        }
        
        .btn {
          background-color: blue;
          color: white;
          font-size: 12px;
          border-radius: 10%;
          padding: 16px;
          margin: 4px 4px 4px 32px;
        }
      }
    `;
  }
  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
          <div class="title">
            ${this.title}
          </div>
          
          <img class="image" alt="Github profile photo of the prof" src="${this.imageUrl}">
          
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary colorWhite> Description </summary>
            <div class="des">
              <slot>${this.description}</slot>
            </div>
          </details>

          <a href="${this.linkUrl}">
            <button class="btn"> ${this.btnDesc} </button>
          </a>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      imageUrl: { type: String },
      linkUrl: { type: String },
      btnDesc: { type: String },
      fancy: { type: Boolean, reflect: true },
      colorWhite: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
