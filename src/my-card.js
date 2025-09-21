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
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      #cardlist {
        display: flex;
      }

      .card {
        display: inline-block;
        background-color: black;
        border: 16px solid green;
        padding: 100px 12px;
        margin: 8px;
        height: 300px;
        max-width: 300px;
      }

      .card.fancy {
        background-color: lightblue;
      }

      .title {
        background-color: green;
        color: white;
        padding: 12px;
        margin: auto;
        height: 20px;
        max-width: 200px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        height: 20px;
        max-width: 200px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
          <div class="title">
            ${this.title}
          </div>
          
          <img class="image" alt="Github profile photo of the prof" src="${this.imageUrl}">
          
          <div class="des">
            ${this.description}
          </div>
         
          <a href="${this.linkUrl}">
            <button class="btn">Hax In</button>
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
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
