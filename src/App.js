import React from "react";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          image={faker.image.avatar()}
          time="Today at 9:45AM"
          content="How artistic!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Kim"
          image={faker.image.avatar()}
          time="Today at 5:03AM"
          content="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mike"
          image={faker.image.avatar()}
          time="Yesterday at 11:23PM"
          content="Great work :)"
        />
      </ApprovalCard>
    </div>
  );
};
export default App;
