import React from "react";
import { Card, Feed } from "semantic-ui-react";

const Recent = () => (
  <Card>
    <Card.Content>
      <Card.Header>Thanks For </Card.Header>
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
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default Recent;
