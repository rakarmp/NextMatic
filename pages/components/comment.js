import React, { useState } from "react";
import { Form, Button, Comment, Icon } from "semantic-ui-react";

export default function Content() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simpan komentar baru ke dalam array comments
    setComments([...comments, newComment]);

    // reset form input
    setNewComment("");
  };

  return (
    <>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://avatars.githubusercontent.com/u/83684256?v=4" />
          <Comment.Content>
            <Comment.Author as="a">
              RakaTrust <Icon name="terminal" size="small" />
            </Comment.Author>
            <Comment.Metadata>
              <div>Author</div>
            </Comment.Metadata>
            <Comment.Text>
              Ini adalah komentar pertama yang dibuat oleh author
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        {comments.map((comment, index) => (
          <Comment key={index}>
            <Comment.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRIy5pUVWEC7CmDkvQgeMkxYyhHfmdftpcA&usqp=CAU" />
            <Comment.Content>
              <Comment.Author as="a">
                Ini Kamu <Icon name="user" size="small" />
              </Comment.Author>
              <Comment.Metadata>
                <div>User</div>
              </Comment.Metadata>
              <Comment.Text>{comment}</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
      <Form onSubmit={handleSubmit}>
        <Form.TextArea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button
          type="submit"
          content="Add Comment"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </>
  );
}
