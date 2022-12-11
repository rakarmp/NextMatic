import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";

const Recent = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Thanks For <Icon name="thumbtack" size="small" />
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image="semantic-ui.png" />
          <Feed.Content>
            <Feed.Summary>
              <a href="https://semantic-ui.com/">
                <p>Semantic UI</p>
              </a>
              Semantic UI adalah framework user interface yang menyediakan
              komponen desain yang terstruktur dan responsif
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="nextjs.png" />
          <Feed.Content>
            <Feed.Summary>
              <a href="https://nextjs.org/">
                <p>Next.JS</p>
              </a>
              Next.js adalah framework JavaScript yang dibangun di atas React.js
              untuk membangun aplikasi web yang skalabel.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image="vercel.svg" />
          <Feed.Content>
            <Feed.Summary>
              <a href="https://vercel.com/">
                <p>Vercel</p>
              </a>
              Vercel adalah perusahaan yang menyediakan layanan hosting untuk
              aplikasi web dan serverless functions.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default Recent;
